import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import FeaturesPreview from '../components/FeaturesPreview';

const Home = () => {
  return (
    <div className="home-page">
      {/* =================================
          HERO SECTION
      ================================== */}
      <Hero />

      {/* =================================
          TRUSTED BY
      ================================== */}
      <TrustedBy />

      {/* =================================
          FEATURES PREVIEW
      ================================== */}
      <FeaturesPreview />

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
