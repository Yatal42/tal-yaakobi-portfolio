import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ReviewForm from "./ReviewForm";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmitted: () => void;
}

export default function ReviewFormModal({ isOpen, onClose, onSubmitted }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
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

  const modal = (
    <div
      className="review-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Leave a review"
      onClick={onClose}
    >
      <div className="review-modal" onClick={(event) => event.stopPropagation()}>
        <div className="review-modal-header">
          <h3 className="review-modal-title">Leave a Review</h3>
          <button
            type="button"
            className="review-modal-close"
            onClick={onClose}
            aria-label="Close review form"
          >
            x
          </button>
        </div>
        <div className="review-modal-body">
          <ReviewForm
            onSubmitted={() => {
              onSubmitted();
            }}
          />
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
