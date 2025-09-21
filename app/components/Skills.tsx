import { useEffect, useState } from 'react';

const Skills = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const techIcons = [
    { name: '', filled: false, color: '#000000' },
    { name: '', filled: false, color: '#000000' },
    { name: '', filled: false, color: '#000000' },
    { name: '', filled: false, color: '#000000' },
    { name: '', filled: false, color: '#000000' },
    { name: '', filled: false, color: '#000000' },
    { name: 'TS', filled: true, color: '#3178C6' },
    { name: 'TS', filled: true, color: '#3178C6' },
    { name: 'TS', filled: true, color: '#3178C6' },
    { name: 'R', react: true, color: '#61DAFB' },
    { name: 'R', react: true, color: '#61DAFB' },
    { name: 'R', react: true, color: '#61DAFB' }
  ];

  return (
    <section 
      id="skills" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
        background: 'transparent',
        position: 'relative',
        zIndex: 1
      }}
    >
      <h2 
        style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: windowWidth <= 768 ? '1.5rem' : '2.5rem',
          color: '#FFFFFF',
          textAlign: 'center',
          margin: '64px 0 32px 0',
          textShadow: '1px 1px 0 #00FF41, 2px 2px 0 #FC4198'
        }}
      >
        What I'm Good At
      </h2>
      
      <div style={{
        display: 'flex',
        flexDirection: windowWidth <= 768 ? 'column' : 'row',
        gap: '3rem',
        maxWidth: '56rem',
        width: '100%',
        padding: '0 1rem',
        alignItems: windowWidth <= 768 ? 'center' : 'flex-start',
        justifyContent: 'center'
      }}>
        {/* Tech Icons Grid - First on desktop (left), Second on mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: windowWidth <= 480 ? 'repeat(3, 60px)' : 'repeat(3, 80px)',
          gridTemplateRows: 'repeat(4, 1fr)',
          gap: windowWidth <= 480 ? '12px' : '16px',
          justifyContent: 'center',
          order: windowWidth <= 768 ? 2 : 1
        }}>
          {techIcons.map((tech, index) => (
            <div
              key={index}
              style={{
                width: windowWidth <= 480 ? '60px' : '80px',
                height: windowWidth <= 480 ? '60px' : '80px',
                border: '2px solid #FFFFFF',
                background: tech.filled || tech.react ? tech.color : '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                fontWeight: 'bold',
                color: tech.filled || tech.react ? '#FFFFFF' : '#FFFFFF'
              }}
            >
              {tech.name}
            </div>
          ))}
        </div>

        {/* Text Content - First on mobile, Second on desktop (right) */}
        <div style={{
          flex: 1,
          textAlign: windowWidth <= 768 ? 'center' : 'left',
          order: windowWidth <= 768 ? 1 : 2
        }}>
          <div style={{marginBottom: '2rem'}}>
            <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white'}}>Skills</h3>
            <p style={{
              fontFamily: "'Orbitron', monospace",
              lineHeight: 1.6,
              color: '#C0C0C0',
              textAlign: windowWidth <= 768 ? 'center' : 'left',
              marginBottom: '1rem'
            }}>
              A passionate Computer Science BSc graduate, combining strong technical skills with creative vision.
            </p>
          </div>
          
          <div>
            <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white'}}>Soft Skills</h3>
            <p style={{
              fontFamily: "'Orbitron', monospace",
              lineHeight: 1.6,
              color: '#C0C0C0',
              textAlign: windowWidth <= 768 ? 'center' : 'left'
            }}>
              A passionate Computer Science BSc graduate, combining strong communication and leadership abilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;