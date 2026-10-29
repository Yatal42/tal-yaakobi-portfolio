import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import Window from "./Window";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  windowTitle: string;
  label: string;
  closeLabel: string;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, windowTitle, label, closeLabel, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={label}
        onClick={(event) => event.stopPropagation()}
      >
        <Window
          title={windowTitle}
          actions={
            <button type="button" className="win-control win-close" onClick={onClose} aria-label={closeLabel}>
              ×
            </button>
          }
        >
          {children}
        </Window>
      </div>
    </div>,
    document.body
  );
}
