import './HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'Create Spaces',
    description:
      'Create dedicated spaces for your projects, learning, goals, and everything you want to keep organized.',
  },
  {
    number: '02',
    title: 'Track Progress',
    description:
      'Turn your plans into measurable progress with tasks, milestones, notes, and useful insights.',
  },
  {
    number: '03',
    title: 'Stay Ahead',
    description:
      'Keep everything connected, stay focused on what matters, and continuously move forward.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-heading">
          <span className="how-it-works-eyebrow">HOW IT WORKS</span>

          <h2>
            From ideas
            <br />
            <span>to progress.</span>
          </h2>

          <p>
            NovaHub keeps your workflow simple. Create your space, organize what
            matters, and keep moving forward.
          </p>
        </div>

        <div className="steps">
          {steps.map((step, index) => (
            <article className="step" key={step.number}>
              <div className="step-top">
                <span className="step-number">{step.number}</span>

                {index < steps.length - 1 && (
                  <span className="step-connector" />
                )}
              </div>

              <div className="step-content">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

              <span className="step-glow" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
