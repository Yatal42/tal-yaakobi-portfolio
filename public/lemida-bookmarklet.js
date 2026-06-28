(async () => {
  try {
    if (!/lemida\.biu\.ac\.il/.test(location.href)) {
      alert('הסימניה עובדת רק בדף הרצאה בלמידע (lemida.biu.ac.il).');
      return;
    }
    const html = document.documentElement.outerHTML;
    const m = html.match(/videoid["'\s:=]+(\d+)/i);
    if (!m) {
      alert('לא נמצא מזהה סרטון. ודאי שאת בדף הרצאה שהנגן בו נטען.');
      return;
    }
    const videoId = m[1];
    const h1 = document.querySelector('h1');
    let title = ((h1 && h1.textContent) || document.title || 'lecture').trim();
    title = title
      .replace(/\s*\|\s*למדה.*$/, '')
      .replace(/[\\/*?"<>|]/g, '')
      .trim()
      .slice(0, 120) || 'lecture';
    let vtt = null;
    for (const lang of ['he', 'iw', 'en']) {
      const r = await fetch(
        '/local/video_directory/subs.php?video_id=' + videoId + '&language=' + lang,
        { credentials: 'include' }
      );
      if (r.ok) {
        const t = await r.text();
        if (t.startsWith('WEBVTT')) {
          vtt = t;
          break;
        }
      }
    }
    if (!vtt) {
      alert('לא נמצאו כתוביות זמינות עבור הסרטון.');
      return;
    }
    const blob = new Blob([vtt], { type: 'text/vtt;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = title + '.vtt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch (e) {
    alert('שגיאה בהורדת הכתוביות: ' + (e.message || e));
  }
})();
