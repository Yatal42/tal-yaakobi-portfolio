import { Form } from "react-router";
import { localizePath, useI18n } from "../lib/locale";

interface LogoutButtonProps {
  className?: string;
}

export default function LogoutButton({ className = "btn-bevel" }: LogoutButtonProps) {
  const { locale, t } = useI18n();

  return (
    <Form method="post" action="/logout" reloadDocument className="logout-form">
      <input type="hidden" name="returnTo" value={localizePath("/", locale)} />
      <button type="submit" className={className}>
        {t.auth.signOut}
      </button>
    </Form>
  );
}
