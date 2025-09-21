interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = "" }: SocialLinksProps) => {
  const handleCVClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open('/CV.pdf', '_blank');
  };

  const handleLinkedInClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open('https://www.linkedin.com/in/tal-yaakobi-191059227/', '_blank');
  };

  const handleGitHubClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open('https://github.com/Yatal42', '_blank');
  };

  return (
    <div className={`relative ${className}`} style={{ width: '52px', height: '400px' }} id="social-links-container">
      {/* Original SVG as background */}
      <img 
        src="/assets/side-icons.svg" 
        alt="Social Links" 
        className="w-full h-full opacity-90 pointer-events-none"
        style={{ width: '52px', height: '400px', objectFit: 'contain' }}
      />
      
      {/* CV - Invisible clickable area on CV text (top section) */}
      <div
        onClick={handleCVClick}
        className="absolute cursor-pointer"
        style={{ 
          top: '140px',
          left: '8px',
          width: '36px',
          height: '25px'
        }}
        title="Download CV"
      />
      
      {/* GitHub - Invisible clickable area on GitHub icon (middle section) */}
      <div
        onClick={handleGitHubClick}
        className="absolute cursor-pointer"
        style={{ 
          top: '185px',
          left: '5px',
          width: '42px',
          height: '35px'
        }}
        title="Visit GitHub Profile"
      />
      
      {/* LinkedIn - Invisible clickable area on LinkedIn icon (bottom section) */}
      <div
        onClick={handleLinkedInClick}
        className="absolute cursor-pointer"
        style={{ 
          top: '230px',
          left: '5px',
          width: '42px',
          height: '45px'
        }}
        title="Visit LinkedIn Profile"
      />
    </div>
  );
};

export default SocialLinks;
