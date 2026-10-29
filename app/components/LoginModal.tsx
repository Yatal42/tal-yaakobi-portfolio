import { useLocation } from "react-router";
import Modal from "./ui/Modal";
import { useI18n } from "../lib/locale";
import { useViewer } from "../lib/viewer";

export default function LoginModal() {
  const { t } = useI18n();
  const { pathname } = useLocation();
  const { loginOpen, loginError, closeLogin } = useViewer();

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
        {loginError ? (
          <p className="login-error" role="alert">
            {t.auth.error}
          </p>
        ) : null}
        <a href={`/auth/google?returnTo=${encodeURIComponent(pathname)}`} className="btn btn-primary login-google">
          <span className="login-google-mark" aria-hidden="true">G</span>
          {t.auth.google}
        </a>
      </div>
    </Modal>
  );
}
