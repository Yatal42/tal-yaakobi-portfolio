import { useRef, useState } from 'react';

type Track = {
  title: string;
  src: string;
};

const tracks: Track[] = [
  { title: 'About_Me_Intro.mp3', src: '' },
  { title: 'Career_Story.mp3', src: '' },
  { title: 'Future_Vision.mp3', src: '' }
];

export default function RetroAudioPlayer() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const resetPlayback = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const handlePlayPause = async () => {
    if (!audioRef.current) return;
    if (!tracks[trackIndex].src) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    resetPlayback();
  };

  const goToPrevTrack = () => {
    resetPlayback();
    setTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  const goToNextTrack = () => {
    resetPlayback();
    setTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  return (
    <div className="about-player-area">
      <div className="about-player-shell">
        <img
          src="/assets/group-112-player.svg"
          alt="Retro audio player"
          className="about-player-svg"
        />
        <div className="about-player-window-title">{tracks[trackIndex].title}</div>

        <div className="about-player-hotspots">
          <button
            type="button"
            className="about-player-hotspot about-player-hotspot--prev"
            onClick={goToPrevTrack}
            aria-label="Previous track"
          />
          <button
            type="button"
            className="about-player-hotspot about-player-hotspot--play"
            onClick={handlePlayPause}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          />
          <button
            type="button"
            className="about-player-hotspot about-player-hotspot--stop"
            onClick={handleStop}
            aria-label="Stop"
          />
          <button
            type="button"
            className="about-player-hotspot about-player-hotspot--next"
            onClick={goToNextTrack}
            aria-label="Next track"
          />
        </div>
      </div>

      <audio
        ref={audioRef}
        src={tracks[trackIndex].src || undefined}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}
