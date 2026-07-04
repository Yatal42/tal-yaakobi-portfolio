interface NavigationButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled?: boolean;
  itemLabel?: string;
}

const NavigationButton = ({ direction, onClick, disabled = false, itemLabel = 'project' }: NavigationButtonProps) => {
  const svgSrc = direction === 'prev' ? '/assets/nav-arrow-left.svg' : '/assets/nav-arrow-right.svg';
  const actionLabel = direction === 'prev' ? 'Previous' : 'Next';

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`svg-nav-button svg-nav-button--${direction} ${disabled ? 'svg-nav-button--disabled' : ''}`}
      aria-label={`${actionLabel} ${itemLabel}`}
    >
      <img 
        src={svgSrc}
        alt={actionLabel}
        className="nav-button-svg"
      />
    </button>
  );
};

export default NavigationButton;
