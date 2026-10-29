import { Link } from "react-router";
import { localizePath, useI18n } from "../lib/locale";
import { useViewer } from "../lib/viewer";

export default function SiteFooter() {
  const { locale, t } = useI18n();
  const { previewEnabled, signedIn, setPreviewSignedIn } = useViewer();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="site-footer-copy">© {new Date().getFullYear()} {t.footer.name}</p>
        <ul className="site-footer-links">
          <li><a href="/CV.pdf" target="_blank" rel="noopener noreferrer">{t.footer.cv}</a></li>
          <li><a href="https://github.com/Yatal42" target="_blank" rel="noopener noreferrer">{t.footer.github}</a></li>
          <li><a href="https://www.linkedin.com/in/tal-yaakobi-191059227/" target="_blank" rel="noopener noreferrer">{t.footer.linkedin}</a></li>
          <li><Link to={localizePath("/development", locale)}>{t.footer.development}</Link></li>
        </ul>
      </div>

      {previewEnabled ? (
        <div className="preview-toggle" role="group" aria-label={t.footer.preview}>
          <span>{t.footer.preview}</span>
          <button
            type="button"
            className="btn-bevel"
            aria-pressed={!signedIn}
            onClick={() => setPreviewSignedIn(false)}
          >
            {t.footer.guest}
          </button>
          <button
            type="button"
            className="btn-bevel"
            aria-pressed={signedIn}
            onClick={() => setPreviewSignedIn(true)}
          >
            {t.footer.signedIn}
          </button>
        </div>
      ) : null}
    </footer>
  );
}
