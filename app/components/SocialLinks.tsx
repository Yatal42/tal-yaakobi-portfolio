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

  const containerStyle = { width: '56px', height: '420px' };

  return (
    <div className={`relative ${className}`} style={containerStyle} id="social-links-container">
      <img 
        src="/assets/side-icons.svg" 
        alt="Social Links" 
        className="w-full h-full opacity-90 pointer-events-none"
        style={{ width: '56px', height: '420px', objectFit: 'contain' }}
      />

      <button
        type="button"
        onClick={handleCVClick}
        className="social-link-hit-area"
        style={{ 
          top: '31%',
          left: '8%',
          width: '84%',
          height: '14%'
        }}
        title="Download CV"
        aria-label="Download CV"
      />

      <button
        type="button"
        onClick={handleGitHubClick}
        className="social-link-hit-area"
        style={{ 
          top: '43.5%',
          left: '8%',
          width: '84%',
          height: '14%'
        }}
        title="Visit GitHub Profile"
        aria-label="Visit GitHub Profile"
      />

      <button
        type="button"
        onClick={handleLinkedInClick}
        className="social-link-hit-area"
        style={{ 
          top: '56%',
          left: '8%',
          width: '84%',
          height: '16%'
        }}
        title="Visit LinkedIn Profile"
        aria-label="Visit LinkedIn Profile"
      />
    </div>
  );
};

export default SocialLinks;
