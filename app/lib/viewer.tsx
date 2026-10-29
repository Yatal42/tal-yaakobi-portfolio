import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router";
import type { Course, CourseId, CourseState } from "../data/courses";

export interface ViewerUser {
  name: string;
  email: string;
}

interface ViewerValue {
  user: ViewerUser | null;
  signedIn: boolean;
  enrolled: CourseId[];
  loginOpen: boolean;
  loginError: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  courseState: (course: Course) => CourseState;
}

const ViewerContext = createContext<ViewerValue | null>(null);

interface ViewerProviderProps {
  user: ViewerUser | null;
  enrolled: CourseId[];
  children: ReactNode;
}

export function ViewerProvider({ user, enrolled, children }: ViewerProviderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("auth") !== "error") return;
    setLoginError(true);
    setLoginOpen(true);
    params.delete("auth");
    const search = params.toString();
    navigate({ pathname: location.pathname, search: search ? `?${search}` : "", hash: location.hash }, { replace: true });
  }, [location.search, location.pathname, location.hash, navigate]);

  const openLogin = useCallback(() => {
    setLoginError(false);
    setLoginOpen(true);
  }, []);
  const closeLogin = useCallback(() => setLoginOpen(false), []);

  const value = useMemo<ViewerValue>(() => {
    const courseState = (course: Course): CourseState => {
      if (enrolled.includes(course.id)) return "enrolled";
      if (course.published) return "locked";
      return "soon";
    };
    return {
      user,
      signedIn: Boolean(user),
      enrolled,
      loginOpen,
      loginError,
      openLogin,
      closeLogin,
      courseState,
    };
  }, [user, enrolled, loginOpen, loginError, openLogin, closeLogin]);

  return <ViewerContext.Provider value={value}>{children}</ViewerContext.Provider>;
}

export function useViewer() {
  const value = useContext(ViewerContext);
  if (!value) throw new Error("useViewer must be used inside ViewerProvider");
  return value;
}
