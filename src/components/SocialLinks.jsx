import React from 'react';

const SocialLinks = () => {
  const openGitHub = () => {
    window.open('https://github.com/djairofilho', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/djairo-dantas-bb228022b/', '_blank');
  };

  return (
    <section className="fade-in" style={{animationDelay: '0.4s'}}>
      <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#f1f5f9' }}>Conecte-se Comigo</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {/* GitHub Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 card-hover cursor-pointer" onClick={openGitHub}>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto flex items-center justify-center text-white text-2xl mb-4">
              <i className="fab fa-github"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#f1f5f9' }}>GitHub</h3>
            <p className="mb-4" style={{ color: '#94a3b8' }}>Veja meus projetos e contribuições no GitHub</p>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Visitar GitHub
            </button>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 card-hover cursor-pointer" onClick={openLinkedIn}>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl mb-4">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#f1f5f9' }}>LinkedIn</h3>
            <p className="mb-4" style={{ color: '#94a3b8' }}>Conecte-se comigo profissionalmente</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Visitar LinkedIn
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
