import { Form, useLocation } from "react-router";
import { useI18n } from "../lib/locale";

interface LogoutButtonProps {
  className?: string;
  returnTo?: string;
}

export default function LogoutButton({ className = "btn-bevel", returnTo }: LogoutButtonProps) {
  const { t } = useI18n();
  const location = useLocation();

  return (
    <Form method="post" action="/logout" reloadDocument className="logout-form">
      <input type="hidden" name="returnTo" value={returnTo ?? location.pathname} />
      <button type="submit" className={className}>
        {t.auth.signOut}
      </button>
    </Form>
  );
}
