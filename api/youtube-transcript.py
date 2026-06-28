from http.server import BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import json
import re

from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api._errors import (
    NoTranscriptFound,
    TranscriptsDisabled,
    VideoUnavailable,
)


LANGUAGE_PRIORITY = ['he', 'iw', 'en', 'en-US', 'en-GB']
CORS_ORIGIN = '*'


def extract_video_id(value):
    if not value:
        return None
    value = value.strip()
    if re.fullmatch(r'[A-Za-z0-9_-]{11}', value):
        return value
    try:
        parsed = urlparse(value)
    except Exception:
        return None
    host = (parsed.hostname or '').lower()
    if host in ('youtu.be',):
        candidate = parsed.path.lstrip('/').split('/')[0]
        return candidate if re.fullmatch(r'[A-Za-z0-9_-]{11}', candidate) else None
    qs = parse_qs(parsed.query)
    candidate = (qs.get('v') or [None])[0]
    if candidate and re.fullmatch(r'[A-Za-z0-9_-]{11}', candidate):
        return candidate
    m = re.search(r'/(?:embed|shorts|live)/([A-Za-z0-9_-]{11})', parsed.path or '')
    if m:
        return m.group(1)
    return None


def fetch_segments(video_id, preferred_lang=None):
    languages = list(LANGUAGE_PRIORITY)
    if preferred_lang:
        languages = [preferred_lang] + [l for l in LANGUAGE_PRIORITY if l != preferred_lang]
    api = YouTubeTranscriptApi()
    try:
        transcript = api.fetch(video_id, languages=languages)
        return [
            {'start': float(s.start), 'duration': float(s.duration), 'text': s.text}
            for s in transcript
        ], None
    except NoTranscriptFound:
        pass
    except TranscriptsDisabled:
        return None, 'transcripts_disabled'
    except VideoUnavailable:
        return None, 'video_unavailable'
    except Exception as e:
        return None, f'fetch_failed:{type(e).__name__}'

    try:
        listing = api.list(video_id)
        for t in listing:
            fetched = t.fetch()
            return [
                {'start': float(s.start), 'duration': float(s.duration), 'text': s.text}
                for s in fetched
            ], None
    except Exception:
        pass
    return None, 'no_transcript_found'


class handler(BaseHTTPRequestHandler):
    def _write_json(self, status, body):
        payload = json.dumps(body, ensure_ascii=False).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Cache-Control', 'no-store')
        self.send_header('Access-Control-Allow-Origin', CORS_ORIGIN)
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Content-Length', str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin', CORS_ORIGIN)
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_GET(self):
        try:
            parsed = urlparse(self.path)
            qs = parse_qs(parsed.query)
            raw_input = (qs.get('url') or qs.get('v') or qs.get('id') or [''])[0]
            lang = (qs.get('lang') or [None])[0]
            if not raw_input:
                self._write_json(400, {'error': 'missing_parameter', 'message': 'Provide url, v, or id parameter.'})
                return

            video_id = extract_video_id(raw_input)
            if not video_id:
                self._write_json(400, {'error': 'invalid_video_id', 'message': 'Could not extract a YouTube video id.'})
                return

            segments, err = fetch_segments(video_id, lang)
            if segments is None:
                status = 404 if err in ('no_transcript_found', 'transcripts_disabled', 'video_unavailable') else 502
                self._write_json(status, {
                    'error': err or 'unknown',
                    'video_id': video_id,
                })
                return

            self._write_json(200, {
                'video_id': video_id,
                'segments': segments,
                'count': len(segments),
            })
        except Exception as e:
            self._write_json(500, {'error': 'server_error', 'message': str(e)})
