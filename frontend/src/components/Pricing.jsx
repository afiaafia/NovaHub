import './Pricing.css';

const plans = [
  {
    name: 'Free',
    description: 'Everything you need to get started.',
    price: '$0',
    period: 'forever',
    features: [
      '3 Workspaces',
      'Basic notes',
      'Task management',
      'Space organization',
    ],
    button: 'Get Started',
    featured: false,
  },
  {
    name: 'Pro',
    description: 'For serious productivity and organization.',
    price: '$9',
    period: 'per month',
    features: [
      'Unlimited Workspaces',
      'Advanced notes',
      'Unlimited tasks',
      'Priority features',
      'Advanced organization',
    ],
    button: 'Start Pro',
    featured: true,
  },
  {
    name: 'Team',
    description: 'Powerful collaboration for growing teams.',
    price: '$19',
    period: 'per month',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Shared workspaces',
      'Team management',
      'Priority support',
    ],
    button: 'Choose Team',
    featured: false,
  },
];

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        {/* Section Header */}
        <div className="pricing-header">
          <span className="pricing-badge">PRICING</span>

          <h2>
            Choose the workspace
            <span> that fits you.</span>
          </h2>

          <p>
            Start for free and upgrade whenever you need more power,
            flexibility, and collaboration.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              className={`pricing-card ${
                plan.featured ? 'pricing-card-featured' : ''
              }`}
              key={plan.name}
            >
              {/* Popular Badge */}
              {plan.featured && (
                <div className="popular-badge">MOST POPULAR</div>
              )}

              {/* Plan Info */}
              <div className="pricing-card-top">
                <h3>{plan.name}</h3>

                <p>{plan.description}</p>
              </div>

              {/* Price */}
              <div className="price-wrapper">
                <span className="price">{plan.price}</span>

                <span className="price-period">/ {plan.period}</span>
              </div>

              {/* Button */}
              <button
                className={`pricing-button ${
                  plan.featured
                    ? 'pricing-button-primary'
                    : 'pricing-button-secondary'
                }`}
              >
                {plan.button}

                <span>→</span>
              </button>

              {/* Divider */}
              <div className="pricing-divider"></div>

              {/* Features */}
              <div className="pricing-features">
                <span className="features-label">WHAT'S INCLUDED</span>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="check-icon">✓</span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="pricing-note">
          <span>✦</span>

          <p>
            No credit card required. Start free and upgrade when you're ready.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
