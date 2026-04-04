interface NavigationButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled?: boolean;
}

const NavigationButton = ({ direction, onClick, disabled = false }: NavigationButtonProps) => {
  const svgSrc = direction === 'prev' ? '/assets/nav-arrow-left.svg' : '/assets/nav-arrow-right.svg';
  
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`svg-nav-button svg-nav-button--${direction} ${disabled ? 'svg-nav-button--disabled' : ''}`}
      aria-label={direction === 'prev' ? 'Previous project' : 'Next project'}
    >
      <img 
        src={svgSrc}
        alt={direction === 'prev' ? 'Previous' : 'Next'}
        className="nav-button-svg"
      />
    </button>
  );
};

export default NavigationButton;
