interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onStop: () => void;
}

export default function PlayerControls({ isPlaying, onPlayPause, onStop }: PlayerControlsProps) {
  const buttonStyle = {
    all: 'unset' as const,
    boxSizing: 'border-box' as const,
    background: '#00FF41',
    backgroundColor: '#00FF41',
    border: '2px solid #000000',
    width: '45px',
    height: '45px',
    fontSize: '18px',
    color: '#000000',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    opacity: 1,
    visibility: 'visible' as const,
    position: 'relative' as const,
    zIndex: 10
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = '#FC4198';
    e.currentTarget.style.backgroundColor = '#FC4198';
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = '0 4px 0 #000000';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = '#00FF41';
    e.currentTarget.style.backgroundColor = '#00FF41';
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <div 
      style={{
        display: 'flex',
        gap: '12px',
        justifyContent: 'center',
        padding: '30px 20px',
        height: '140px',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box',
        background: 'linear-gradient(to bottom, #FFFFFF, #F8F8F8)',
        border: '3px solid #333333',
        borderRadius: '6px',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
        position: 'relative',
        zIndex: 100
      } as React.CSSProperties}
    >
      <button
        onClick={onPlayPause}
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
      <button
        onClick={onStop}
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="Stop"
      >
        ⏹
      </button>
    </div>
  );
}

