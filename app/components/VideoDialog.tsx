import Dialog from "./Dialog";

interface VideoDialogProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export default function VideoDialog({ isOpen, onClose, videoId }: VideoDialogProps) {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Project Demo"
      size="xl"
    >
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Project Demo Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Dialog>
  );
}