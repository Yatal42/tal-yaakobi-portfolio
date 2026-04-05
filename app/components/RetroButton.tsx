interface RetroButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'link';
}

export default function RetroButton({ onClick, children, href, type = 'button' }: RetroButtonProps) {
  const isExternalHttpLink = typeof href === 'string' && /^https?:\/\//i.test(href);

  const baseStyle = {
    all: 'unset' as const,
    boxSizing: 'border-box' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    background: '#FC4198',
    border: '3px solid #000000',
    padding: '20px',
    width: 'min(108px, 100%)',
    aspectRatio: '1 / 1',
    height: 'auto',
    minWidth: '0',
    cursor: 'pointer',
    fontFamily: "'Press Start 2P', monospace",
    color: '#FFFFFF',
    textAlign: 'center' as const,
    transition: 'all 0.3s ease',
    position: 'relative' as const,
    zIndex: 1
  };

  if (type === 'link' && href) {
    return (
      <a
        href={href}
        target={isExternalHttpLink ? "_blank" : undefined}
        rel={isExternalHttpLink ? "noopener noreferrer" : undefined}
        style={baseStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#00FF41';
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 6px 0 #000000';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#FC4198';
          e.currentTarget.style.transform = 'translateY(0px)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      style={baseStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#00FF41';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 6px 0 #000000';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#FC4198';
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.boxShadow = '0 2px 0 #000000';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 6px 0 #000000';
      }}
    >
      {children}
    </button>
  );
}

