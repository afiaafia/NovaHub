import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="home-page">
      {/* =========================
          Hero
      ========================== */}
      <Hero />

      {/* =========================
          Features
      ========================== */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-heading">
            <span>WHY NOVAHUB</span>

            <h2>
              Everything organized.
              <br />
              Nothing complicated.
            </h2>

            <p>
              Keep your digital world structured and accessible from one
              workspace.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">🗂️</div>

              <h3>Organize</h3>

              <p>
                Create dedicated spaces for different areas of your work and
                learning.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">⚡</div>

              <h3>Stay Focused</h3>

              <p>
                Keep everything important in one place without unnecessary
                complexity.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">🚀</div>

              <h3>Keep Growing</h3>

              <p>
                Build your workspace around the things you want to learn and
                create.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="cta-section">
        <div className="container cta-card">
          <div>
            <span>READY TO ORGANIZE?</span>

            <h2>Build your own digital workspace.</h2>
          </div>

          <Link to="/dashboard" className="primary-button">
            Get Started →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
