import React from 'react';

const links = [
  {
    title: 'Batalha Naval da Química',
    url: 'https://periodic-table-game.djairodantas.com/',
    description: 'Treine seus conhecimentos de química de forma divertida.',
    accent: '#10b981',
    icon: 'fa-flask',
  },

  {
    title: 'Gerador de QR Code',
    url: 'https://gerador-qr-code.djairodantas.com/',
    description: 'Crie QR Codes rapidamente para qualquer link ou texto.',
    accent: '#94a3b8',
    icon: 'fa-qrcode',
  },
  {
    title: 'Fox Cassino',
    url: 'https://insper-classroom.github.io/projeto-pygame-site-time-turquesa-djairo-lucas-haro/',
    description: 'Jogo em Pygame com captura de gestos via mediapipe e opencv.',
    accent: '#ef4444',
    icon: 'fa-gamepad',
  },
  {
    title: 'Dark Stories',
    url: 'https://darkstories.darkautomation.com.br/',
    description: 'Jogue com os amigos numa resenha de histórias sombrias.',
    accent: '#7c3aed',
    icon: 'fa-moon',
  },
  {
    title: 'Alyvera Agenda',
    url: 'https://agenda.alyvera.pro/',
    description: 'SaaS de agendamentos para salões e prestadores de serviço.',
    accent: '#0ea5e9',
    icon: 'fa-calendar-check',
  },
  {
    title: 'MedAgenda POC',
    url: 'https://github.com/djairofilho/medagenda-poc-agent',
    description: 'Agente de IA para agendamentos médicos — versão completa em desenvolvimento.',
    accent: '#14b8a6',
    iconBrand: true,
    icon: 'fa-brands fa-github',
  },
];

const CoolLinks = () => (
  <section className="fade-in mb-16" style={{ animationDelay: '0.3s' }}>
    <h2 className="text-3xl font-bold text-center mb-2" style={{ color: '#f1f5f9' }}>
      Alguns links legais
    </h2>
    <p className="text-center mb-8" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
      Passe o mouse sobre os cards
    </p>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((item) => (
        <div key={item.url} className="flip-card">
          <div className="flip-card-inner">

            {/* ── Front ── */}
            <div className="flip-card-front">
              <div className="flex flex-col items-center gap-4 text-center">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl"
                  style={{ background: item.accent, boxShadow: `0 0 20px ${item.accent}55` }}
                >
                  <i className={item.iconBrand ? item.icon : `fa-solid ${item.icon}`} />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: '#f1f5f9' }}>
                  {item.title}
                </h3>
              </div>
            </div>

            {/* ── Back ── */}
            <div className="flip-card-back">
              <p className="text-sm leading-relaxed" style={{ color: '#cbd5e1' }}>
                {item.description}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-80"
                style={{ background: item.accent }}
              >
                Visitar →
              </a>
            </div>

          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CoolLinks;
