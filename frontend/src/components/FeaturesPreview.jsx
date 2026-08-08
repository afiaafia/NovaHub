import './FeaturesPreview.css';

const features = [
  {
    number: '01',
    title: 'Task Management',
    description:
      'Organize your daily tasks, priorities, and deadlines in one focused workspace.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="m8 12 2.4 2.4L16.5 8.5" />
      </svg>
    ),
  },

  {
    number: '02',
    title: 'Project Tracking',
    description:
      'Keep projects structured, monitor progress, and stay aligned with what matters.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19V5" />
        <path d="M4 5h12l-2 3 2 3H4" />
        <path d="M8 19h12" />
      </svg>
    ),
  },

  {
    number: '03',
    title: 'Learning Hub',
    description:
      'Turn your learning journey into an organized system for knowledge and growth.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20v15H6.5A2.5 2.5 0 0 0 4 21V6.5Z" />
        <path d="M4 6.5V21" />
        <path d="M8 8h8" />
        <path d="M8 11h6" />
      </svg>
    ),
  },

  {
    number: '04',
    title: 'Goal Setting',
    description:
      'Define meaningful goals, break them into milestones, and keep your progress visible.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1.2" />
      </svg>
    ),
  },

  {
    number: '05',
    title: 'Smart Notes',
    description:
      'Capture ideas, insights, and important information without losing your flow.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M15 3v5h4" />
        <path d="M9 12h6" />
        <path d="M9 16h5" />
      </svg>
    ),
  },

  {
    number: '06',
    title: 'Analytics',
    description:
      'Understand your productivity with clear insights into your work, goals, and progress.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 3-4 3 2 4-6" />
        <path d="M17 7h2v2" />
      </svg>
    ),
  },
];

const FeaturesPreview = () => {
  return (
    <section className="features-preview-section" id="features">
      <div className="features-preview-container">
        <div className="features-preview-heading">
          <span className="features-eyebrow">EVERYTHING YOU NEED</span>

          <h2>
            Stay focused.
            <br />
            <span>Move forward.</span>
          </h2>

          <p>
            NovaHub brings your tasks, projects, learning, goals, notes, and
            progress together in one intelligent workspace.
          </p>
        </div>

        <div className="features-preview-grid">
          {features.map((feature) => (
            <article className="feature-preview-card" key={feature.number}>
              <div className="feature-card-top">
                <span className="feature-number">{feature.number}</span>

                <div className="feature-icon">{feature.icon}</div>
              </div>

              <div className="feature-card-content">
                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>

              <div className="feature-card-glow" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPreview;
