import React from 'react';

const CoolLinks = () => {
  const links = [
    {
      title: 'Jogo da Tabela Periódica',
      url: 'https://periodic-table-game.djairodantas.com/',
      description: 'Treine seus conhecimentos de química de forma divertida.',
      iconBg: 'bg-emerald-600',
      icon: 'fa-flask',
    },
    {
      title: 'Handshake',
      url: 'https://handshake.djairodantas.com/',
      description: 'A quantos apertos de mão você está de alguém famoso?',
      iconBg: 'bg-purple-600',
      icon: 'fa-handshake',
    },
    {
      title: 'Gerador de QR Code',
      url: 'https://gerador-qr-code.djairodantas.com/',
      description: 'Crie QR Codes rapidamente para qualquer link ou texto.',
      iconBg: 'bg-gray-900',
      icon: 'fa-qrcode',
    },
    {
      title: 'n8n',
      url: 'https://eneoitoene.djairodantas.com',
      description: 'Experimento e automações com n8n open source de forma descomplicada.',
      iconBg: 'bg-orange-600',
      icon: 'fa-diagram-project',
    },
    {
      title: 'ChatRM',
      url: 'https://chatrm.djairodantas.com/',
      description: 'Um CRM baseado no chatwoot open source.',
      iconBg: 'bg-blue-600',
      icon: 'fa-comments',
    },
    {
      title: 'Fox Cassino ',
      url: 'https://insper-classroom.github.io/projeto-pygame-site-time-turquesa-djairo-lucas-haro/',
      description: 'Jogo em Pygame desenvolvido com captura de gestos com mediapipe e opencv',
      iconBg: 'bg-red-600',
      icon: 'fa-gamepad',
    },
  ];

  return (
    <section className="fade-in mb-16" style={{ animationDelay: '0.3s' }}>
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Alguns links legais</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.title} (abre em nova aba)`}
            className="block bg-white rounded-xl shadow-lg p-6 card-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 ${item.iconBg} rounded-lg flex items-center justify-center text-white text-xl shrink-0`}>
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">{item.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CoolLinks;
