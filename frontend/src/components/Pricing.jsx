import './Pricing.css';

const plans = [
  {
    name: 'Free',
    description: 'For getting started with your personal workspace.',
    price: '$0',
    period: '/ forever',
    features: [
      '1 personal workspace',
      'Task management',
      'Basic notes',
      'Basic progress tracking',
    ],
    button: 'Get Started',
  },

  {
    name: 'Pro',
    description: 'For serious builders, learners, and creators.',
    price: '$12',
    period: '/ month',
    features: [
      'Unlimited spaces',
      'Advanced project tracking',
      'Learning hub',
      'Goals & milestones',
      'Smart notes',
      'Productivity analytics',
    ],
    button: 'Start Pro',
    featured: true,
  },

  {
    name: 'Enterprise',
    description: 'For teams that need a connected workspace.',
    price: 'Custom',
    period: '',
    features: [
      'Everything in Pro',
      'Team workspaces',
      'Advanced analytics',
      'Collaboration tools',
      'Priority support',
    ],
    button: 'Contact Us',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-heading">
          <span className="pricing-eyebrow">SIMPLE PRICING</span>

          <h2>
            Choose your
            <br />
            <span>way forward.</span>
          </h2>

          <p>
            Start free and upgrade when you need more power, flexibility, and
            control.
          </p>
        </div>

        <div className="pricing-cards">
          {plans.map((plan) => (
            <article
              className={`pricing-card ${plan.featured ? 'featured' : ''}`}
              key={plan.name}
            >
              {plan.featured && (
                <span className="popular-badge">MOST POPULAR</span>
              )}

              <div className="pricing-card-header">
                <h3>{plan.name}</h3>

                <p>{plan.description}</p>
              </div>

              <div className="pricing-price">
                <strong>{plan.price}</strong>

                <span>{plan.period}</span>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="check">✓</span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="pricing-button">
                {plan.button}

                <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
