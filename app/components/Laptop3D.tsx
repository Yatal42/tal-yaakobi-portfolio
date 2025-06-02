import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Laptop3D = () => {
  const [isOpen, setIsOpen] = useState(false); // Start closed

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="laptop-container">
      <div className="laptop-simple" onClick={handleClick}>
        
        {!isOpen ? (
          /* CLOSED: Show only back of laptop with guitar */
          <div className="laptop-closed">
            <div className="guitar-logo">🎸</div>
          </div>
        ) : (
          /* OPEN: Show laptop with screen and keyboard */
          <div className="laptop-open">
            {/* Laptop Base with keyboard */}
            <div className="laptop-base">
              <div className="base-top">
                <div className="keyboard">
                  {Array.from({ length: 60 }, (_, i) => (
                    <div key={i} className="key"></div>
                  ))}
                </div>
                <div className="trackpad"></div>
              </div>
            </div>

            {/* Laptop Screen with code - only when open */}
            <div className="laptop-screen-open">
              <div className="screen">
                <div className="screen-open">
                  <div className="code-editor">
                    <div className="editor-header">
                      <div className="window-controls">
                        <span className="control red"></span>
                        <span className="control yellow"></span>
                        <span className="control green"></span>
                      </div>
                      <span className="filename">portfolio.tsx</span>
                    </div>
                    <div className="code-lines">
                      <div className="line"><span className="keyword">import</span> <span className="string">React</span> <span className="keyword">from</span> <span className="string">'react'</span>;</div>
                      <div className="line"><span className="keyword">const</span> <span className="function">Portfolio</span> = () =&gt; {'{'}</div>
                      <div className="line">  <span className="keyword">return</span> (</div>
                      <div className="line">    &lt;<span className="tag">div</span>&gt;</div>
                      <div className="line">      &lt;<span className="tag">h1</span>&gt;Welcome!&lt;/<span className="tag">h1</span>&gt;</div>
                      <div className="line">    &lt;/<span className="tag">div</span>&gt;</div>
                      <div className="line">  );</div>
                      <div className="line">{'};'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="laptop-label">
        <span>Click to {isOpen ? 'close' : 'open'} • My Development Setup</span>
      </div>
    </div>
  );
};

export default Laptop3D; 