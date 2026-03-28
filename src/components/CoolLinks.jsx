import React from 'react';

const links = [
  {
    title: 'Alyvera Agenda',
    url: 'https://agenda.alyvera.pro/',
    description: 'SaaS de agendamentos para salões e prestadores de serviço. Do booking ao financeiro.',
    accent: '#0ea5e9',
    icon: 'fa-calendar-check',
    tag: 'SaaS',
    colSpan: 2,
  },
  {
    title: 'Dark Stories',
    url: 'https://darkstories.darkautomation.com.br/',
    description: 'Jogue com os amigos numa resenha de histórias sombrias.',
    accent: '#7c3aed',
    icon: 'fa-moon',
    tag: 'Jogo',
    colSpan: 1,
  },
  {
    title: 'Batalha Naval da Química',
    url: 'https://periodic-table-game.djairodantas.com/',
    description: 'Treine seus conhecimentos de química de forma divertida.',
    accent: '#10b981',
    icon: 'fa-flask',
    tag: 'Jogo',
    colSpan: 1,
  },
  {
    title: 'MedAgenda POC',
    url: 'https://github.com/djairofilho/medagenda-poc-agent',
    description: 'Agente de IA para agendamentos médicos. Versão completa em desenvolvimento.',
    accent: '#14b8a6',
    iconBrand: true,
    icon: 'fa-brands fa-github',
    tag: 'POC · IA',
    colSpan: 2,
  },
  {
    title: 'Fox Cassino',
    url: 'https://insper-classroom.github.io/projeto-pygame-site-time-turquesa-djairo-lucas-haro/',
    description: 'Pygame com captura de gestos via mediapipe e opencv.',
    accent: '#ef4444',
    icon: 'fa-gamepad',
    tag: 'Jogo',
    colSpan: 1,
  },
  {
    title: 'Gerador de QR Code',
    url: 'https://gerador-qr-code.djairodantas.com/',
    description: 'Crie QR Codes rapidamente para qualquer link ou texto.',
    accent: '#94a3b8',
    icon: 'fa-qrcode',
    tag: 'Ferramenta',
    colSpan: 1,
  },
];

const BentoCard = ({ item }) => (
  <a
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    className="bento-card"
    style={{ '--accent': item.accent, gridColumn: `span ${item.colSpan}` }}
  >
    {/* Top accent line */}
    <div className="bento-accent-line" />

    {/* Tag badge */}
    <span className="bento-tag" style={{ color: item.accent, borderColor: `${item.accent}40`, background: `${item.accent}12` }}>
      {item.tag}
    </span>

    {/* Icon */}
    <div className="bento-icon" style={{ color: item.accent, filter: `drop-shadow(0 0 8px ${item.accent}80)` }}>
      <i className={item.iconBrand ? item.icon : `fa-solid ${item.icon}`} />
    </div>

    {/* Content */}
    <h3 className="bento-title">{item.title}</h3>
    <p className="bento-desc">{item.description}</p>

    {/* CTA */}
    <span className="bento-cta" style={{ color: item.accent }}>
      Visitar <i className="fa-solid fa-arrow-right bento-arrow" />
    </span>
  </a>
);

const CoolLinks = () => (
  <section className="fade-in mb-16" style={{ animationDelay: '0.3s' }}>
    <h2 className="text-3xl font-bold text-center mb-2" style={{ color: '#f1f5f9' }}>
      Alguns links legais
    </h2>
    <p className="text-center mb-8" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
      Projetos, experimentos e ferramentas
    </p>
    <div className="bento-grid">
      {links.map((item) => (
        <BentoCard key={item.url} item={item} />
      ))}
    </div>
  </section>
);

export default CoolLinks;
