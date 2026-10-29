import { useI18n } from "../lib/locale";

export default function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="site-footer-copy">© {new Date().getFullYear()} {t.footer.name}</p>
        <ul className="site-footer-links">
          <li><a href="/CV.pdf" target="_blank" rel="noopener noreferrer">{t.footer.cv}</a></li>
          <li><a href="https://github.com/Yatal42" target="_blank" rel="noopener noreferrer">{t.footer.github}</a></li>
          <li><a href="https://www.linkedin.com/in/tal-yaakobi-191059227/" target="_blank" rel="noopener noreferrer">{t.footer.linkedin}</a></li>
        </ul>
      </div>
    </footer>
  );
}
