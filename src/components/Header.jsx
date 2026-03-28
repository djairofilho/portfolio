import React, { useState, useEffect } from 'react';

const PHRASES = [
  'Full Stack Developer',
  'Builder of cool things',
  'Open Source Enthusiast',
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 45;
const PAUSE_AFTER_TYPED = 1800;
const PAUSE_AFTER_DELETED = 400;

const Typewriter = () => {
  const [displayed, setDisplayed] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = PHRASES[phraseIdx];

    if (!isDeleting && displayed === current) {
      const t = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPED);
      return () => clearTimeout(t);
    }

    if (isDeleting && displayed === '') {
      const t = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIdx((i) => (i + 1) % PHRASES.length);
      }, PAUSE_AFTER_DELETED);
      return () => clearTimeout(t);
    }

    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const t = setTimeout(() => {
      setDisplayed(isDeleting
        ? current.slice(0, displayed.length - 1)
        : current.slice(0, displayed.length + 1)
      );
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, isDeleting, phraseIdx]);

  return (
    <span style={{ color: '#93c5fd' }}>
      {displayed}
      <span className="typewriter-cursor" />
    </span>
  );
};

const Header = () => {
  return (
    <header className="gradient-bg text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center fade-in">
          <div className="mb-6">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto overflow-hidden shadow-2xl"
              style={{ border: '3px solid rgba(99, 179, 237, 0.4)' }}>
              <img
                src="/djairo.jpg"
                alt="Djairo Dantas"
                className="w-full h-full object-cover object-center"
                loading="eager"
                style={{ filter: 'contrast(1.05) brightness(1.02)' }}
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Djairo Dantas</h1>
          <p className="text-xl md:text-2xl font-light opacity-90 min-h-[2rem]">
            <Typewriter />
          </p>
          <div className="mt-6">
            <span className="inline-block rounded-full px-4 py-2 text-sm font-medium"
              style={{ background: 'rgba(99, 179, 237, 0.15)', border: '1px solid rgba(99, 179, 237, 0.3)' }}>
              <i className="fas fa-circle text-green-400 mr-2" style={{ fontSize: '0.5rem', verticalAlign: 'middle' }}></i>
              Disponível para projetos
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
