interface NavigationButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled?: boolean;
  ariaLabel: string;
}

const NavigationButton = ({ direction, onClick, disabled = false, ariaLabel }: NavigationButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`btn-bevel nav-arrow nav-arrow--${direction}`}
      aria-label={ariaLabel}
    >
      <span aria-hidden="true">{direction === 'prev' ? '←' : '→'}</span>
    </button>
  );
};

export default NavigationButton;
