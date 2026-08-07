import './HowItWorks.css';

const steps = [
  {
    number: '01',
    icon: '✨',
    title: 'Create a Space',
    description:
      'Create a dedicated space for your projects, learning goals, ideas, or anything you want to organize.',
  },
  {
    number: '02',
    icon: '📝',
    title: 'Add Your Content',
    description:
      'Keep notes, tasks, resources, and important information together inside your workspace.',
  },
  {
    number: '03',
    icon: '🚀',
    title: 'Stay Organized',
    description:
      'Manage everything from one place and keep your workflow simple, focused, and productive.',
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works-container">
        {/* Section Header */}
        <div className="how-it-works-header">
          <span className="section-badge">HOW IT WORKS</span>

          <h2>
            Simple setup.
            <span> Powerful workflow.</span>
          </h2>

          <p>
            Get started with NovaHub in just a few simple steps and build your
            own organized digital workspace.
          </p>
        </div>

        {/* Steps */}
        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <div className="step-item" key={step.number}>
              <div className="step-card">
                {/* Number */}
                <div className="step-number">{step.number}</div>

                {/* Icon */}
                <div className="step-icon">{step.icon}</div>

                {/* Content */}
                <div className="step-content">
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              </div>

              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <span></span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="how-it-works-bottom">
          <div>
            <h3>Ready to build your workspace?</h3>
            <p>Start organizing your digital world with NovaHub.</p>
          </div>

          <button
            className="how-it-works-button"
            onClick={() =>
              document
                .getElementById('spaces')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Get Started
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
