import './FeaturesPreview.css';

const features = [
  {
    number: '01',
    title: 'Task Management',
    description: 'Organize, prioritize and complete tasks efficiently.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Project Tracking',
    description: 'Break down projects and track progress visually.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.5 7.5h6l1.8 2H20.5v9.2a1.8 1.8 0 0 1-1.8 1.8H5.3a1.8 1.8 0 0 1-1.8-1.8V7.5Z" />
        <path d="M3.5 7.5V5.8A1.8 1.8 0 0 1 5.3 4h4l1.8 2h3" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Learning Hub',
    description: 'Track your learning journey and build new skills.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H20v17H7.5A3.5 3.5 0 0 0 4 22V5.5Z" />
        <path d="M4 5.5A3.5 3.5 0 0 1 7.5 9H20" />
        <path d="M8.5 13h7" />
        <path d="M8.5 16h5" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Goal Setting',
    description: 'Set goals, track milestones and achieve more.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1.5" />
        <path d="m16.8 7.2 3.2-3.2" />
        <path d="M17.2 4H20v2.8" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Smart Notes',
    description: 'Capture ideas and organize your knowledge.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 3.5h10.5L19 7v13.5H5A1.5 1.5 0 0 1 3.5 19V5A1.5 1.5 0 0 1 5 3.5Z" />
        <path d="M15.5 3.5V7H19" />
        <path d="M7.5 11h7" />
        <path d="M7.5 14h5" />
        <path d="m15.5 17.5 3-3" />
        <path d="m14.5 18.5 1-.2" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Analytics',
    description: 'Analyze your productivity and improve every day.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19.5V5.5" />
        <path d="M4 19.5h16" />
        <path d="m7 15 3.2-3.4 2.7 1.8L18 7.5" />
        <path d="M15.5 7.5H18v2.5" />
      </svg>
    ),
  },
];

const FeaturesPreview = () => {
  return (
    <section className="features-preview" id="features">
      <div className="features-preview-container">
        {/* Section Header */}
        <div className="features-preview-header">
          <span className="features-preview-eyebrow">NOVAHUB FEATURES</span>

          <h2>
            Everything You Need to Stay <span>Ahead</span>
          </h2>

          <p>
            One connected workspace to manage your work, learning, goals, ideas,
            and progress.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="features-preview-grid">
          {features.map((feature) => (
            <article className="features-preview-card" key={feature.number}>
              {/* Card Glow */}
              <div className="feature-card-glow" />

              {/* Top Row */}
              <div className="feature-card-top">
                <div className="feature-preview-icon">{feature.icon}</div>

                <span className="feature-preview-number">{feature.number}</span>
              </div>

              {/* Content */}
              <div className="feature-preview-content">
                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>

              {/* Hover Arrow */}
              <div className="feature-preview-arrow">→</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPreview;
