import React from 'react';

const Header = () => {
  return (
    <header className="gradient-bg text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center fade-in">
          <div className="mb-6">
            <div className="w-40 h-40 md:w-48 md:h-48 bg-white rounded-full mx-auto overflow-hidden shadow-lg">
              <img 
                src="/djairo.jpg" 
                alt="Djairo Dantas" 
                className="w-full h-full object-cover object-center" 
                loading="eager" 
                style={{
                  filter: 'contrast(1.05) brightness(1.02)'
                }}
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Djairo Dantas</h1>
          <p className="text-xl md:text-2xl font-light opacity-90">Desenvolvedor Full Stack</p>
          <div className="mt-6">
            <span className="inline-block bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm font-medium">
              <i className="fas fa-code mr-2"></i>
              Disponível para projetos
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
