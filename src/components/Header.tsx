import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Vers le bas
      setIsHidden(true);
    } else {
      // Vers le haut
      setIsHidden(false);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`app-header ${isHidden ? 'hidden' : ''}`}>
      <h1>Échelle de Fatigue de Pichot</h1>
    </header>
  );
};

export default Header;