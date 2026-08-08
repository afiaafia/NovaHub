import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* =========================
          Hero Section
      ========================== */}
      <Hero />

      {/* =========================
          Features Section
      ========================== */}
      <section className="features" id="features">
        <div className="features-container">
          <div className="section-heading">
            <span className="section-badge">WHY NOVAHUB</span>

            <h2>
              Everything you need
              <br />
              <span>in one space.</span>
            </h2>

            <p>
              Organize your work, track your progress, and manage everything
              from one powerful workspace.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>

              <h3>Smart Workspaces</h3>

              <p>
                Create dedicated spaces for your projects, learning,
                productivity, and personal goals.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>

              <h3>Track Progress</h3>

              <p>
                Monitor your progress and keep everything organized with
                powerful visual insights.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🧠</div>

              <h3>Stay Focused</h3>

              <p>
                Keep your tasks, ideas, resources, and goals connected in one
                focused environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CTA Section
      ========================== */}
      <section className="cta-section">
        <div className="cta-content">
          <span className="section-badge">YOUR SPACE. YOUR FLOW.</span>

          <h2>
            Ready to build your
            <span> next space?</span>
          </h2>

          <p>
            Start organizing your ideas, projects, and progress with NovaHub.
          </p>

          <div className="cta-actions">
            <Link to="/dashboard" className="cta-primary">
              Get Started
            </Link>

            <Link to="/dashboard" className="cta-secondary">
              Explore NovaHub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
