import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="home-page">
      {/* =================================
          HERO SECTION
      ================================== */}
      <Hero />

      {/* =================================
          FEATURES SECTION
      ================================== */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-heading">
            <span className="section-badge">WHY NOVAHUB</span>

            <h2>
              Everything you need.
              <br />
              <span>One powerful space.</span>
            </h2>

            <p>
              Organize your projects, learning, ideas, and progress inside one
              beautifully connected workspace.
            </p>
          </div>

          <div className="feature-grid">
            {/* Feature 01 */}
            <article className="feature-card">
              <div className="feature-icon">⚡</div>

              <span className="feature-number">01</span>

              <h3>Smart Workspaces</h3>

              <p>
                Create dedicated spaces for your projects, learning,
                productivity, and personal goals.
              </p>
            </article>

            {/* Feature 02 */}
            <article className="feature-card">
              <div className="feature-icon">📊</div>

              <span className="feature-number">02</span>

              <h3>Track Your Progress</h3>

              <p>
                Keep an eye on your progress and understand how your work is
                evolving over time.
              </p>
            </article>

            {/* Feature 03 */}
            <article className="feature-card">
              <div className="feature-icon">🧠</div>

              <span className="feature-number">03</span>

              <h3>Stay Focused</h3>

              <p>
                Keep your tasks, ideas, resources, and goals connected without
                unnecessary complexity.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =================================
          CTA SECTION
      ================================== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <span className="section-badge">START YOUR JOURNEY</span>

              <h2>
                Build your own
                <span> digital space.</span>
              </h2>

              <p>
                Bring your ideas, projects, and progress together with NovaHub.
              </p>
            </div>

            <div className="cta-actions">
              <Link to="/dashboard" className="cta-primary">
                Get Started
                <span>→</span>
              </Link>

              <Link to="/dashboard" className="cta-secondary">
                Explore NovaHub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
