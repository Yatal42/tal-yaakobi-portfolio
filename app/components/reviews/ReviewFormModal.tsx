import Modal from "../ui/Modal";
import ReviewForm from "./ReviewForm";
import { useI18n } from "../../lib/locale";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReviewFormModal({ isOpen, onClose }: Props) {
  const { t } = useI18n();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      windowTitle="review.txt"
      label={t.reviews.dialog}
      closeLabel={t.reviews.close}
    >
      <h3 className="modal-title">{t.reviews.modalTitle}</h3>
      <ReviewForm />
    </Modal>
  );
}
