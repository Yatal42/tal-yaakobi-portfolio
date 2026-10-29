import Modal from "./ui/Modal";
import { useI18n } from "../lib/locale";
import { useViewer } from "../lib/viewer";

export default function LoginModal() {
  const { t } = useI18n();
  const { loginOpen, closeLogin, previewEnabled, setPreviewSignedIn } = useViewer();

  const handleGoogle = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!previewEnabled) return;
    event.preventDefault();
    setPreviewSignedIn(true);
    closeLogin();
  };

  return (
    <Modal
      isOpen={loginOpen}
      onClose={closeLogin}
      windowTitle="login.exe"
      label={t.auth.title}
      closeLabel={t.auth.close}
    >
      <div className="login">
        <h3 className="login-title">{t.auth.title}</h3>
        <p className="login-text">{t.auth.text}</p>
        <a href="/auth/google" className="btn btn-primary login-google" onClick={handleGoogle}>
          <span className="login-google-mark" aria-hidden="true">G</span>
          {t.auth.google}
        </a>
        {previewEnabled ? <p className="login-note">{t.auth.previewNote}</p> : null}
      </div>
    </Modal>
  );
}
