import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { courses, type Course, type CourseState } from "../data/courses";
import { sampleProgress } from "../data/courseProgress";

interface ViewerValue {
  signedIn: boolean;
  previewEnabled: boolean;
  setPreviewSignedIn: (value: boolean) => void;
  loginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  courseState: (course: Course) => CourseState;
  showSignIn: boolean;
}

const ViewerContext = createContext<ViewerValue | null>(null);

export function ViewerProvider({ children }: { children: ReactNode }) {
  const previewEnabled = import.meta.env.DEV;
  const [signedIn, setSignedIn] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    if (!previewEnabled) return;
    const preview = new URLSearchParams(window.location.search).get("preview");
    if (preview === "signed-in") setSignedIn(true);
  }, [previewEnabled]);

  const setPreviewSignedIn = useCallback(
    (value: boolean) => {
      if (previewEnabled) setSignedIn(value);
    },
    [previewEnabled]
  );

  const openLogin = useCallback(() => setLoginOpen(true), []);
  const closeLogin = useCallback(() => setLoginOpen(false), []);

  const value = useMemo<ViewerValue>(() => {
    const courseState = (course: Course): CourseState => {
      if (signedIn && sampleProgress.enrolled.includes(course.id)) return "enrolled";
      if (course.published) return "locked";
      return "soon";
    };
    return {
      signedIn,
      previewEnabled,
      setPreviewSignedIn,
      loginOpen,
      openLogin,
      closeLogin,
      courseState,
      showSignIn: !signedIn && (previewEnabled || courses.some((course) => course.published)),
    };
  }, [signedIn, previewEnabled, setPreviewSignedIn, loginOpen, openLogin, closeLogin]);

  return <ViewerContext.Provider value={value}>{children}</ViewerContext.Provider>;
}

export function useViewer() {
  const value = useContext(ViewerContext);
  if (!value) throw new Error("useViewer must be used inside ViewerProvider");
  return value;
}
