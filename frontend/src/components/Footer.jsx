import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="nova-footer">
      {/* =========================================
          BACKGROUND EFFECTS
      ========================================== */}

      <div className="footer-orb footer-orb-one" />
      <div className="footer-orb footer-orb-two" />

      <div className="footer-container">
        {/* =========================================
            TOP FOOTER
        ========================================== */}

        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/logo.png" alt="NovaHub" />

              <span>NovaHub</span>
            </Link>

            <p className="footer-tagline">
              Your Space. Your Flow. Your Progress.
            </p>

            <p className="footer-description">
              One intelligent digital workspace to organize your learning,
              projects, ideas, goals, and progress.
            </p>

            {/* Social Links */}

            <div className="footer-socials">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.38-3.37-1.38-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.07 1.53 1.07.9 1.57 2.35 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.15-4.55-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.2 9.2 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.33 4.81-4.56 5.07.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>

              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <path d="M6.5 8.5H3.2V21h3.3V8.5ZM4.85 3A1.95 1.95 0 1 0 4.85 6.9 1.95 1.95 0 0 0 4.85 3ZM21 13.85c0-3.76-2.01-5.5-4.7-5.5-2.16 0-3.13 1.19-3.67 2.03V8.5H9.33V21h3.3v-6.19c0-1.63.3-3.2 2.33-3.2 2 0 2.03 1.86 2.03 3.31V21H21v-7.15Z" />
                </svg>
              </a>

              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24">
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.86h1.73L8.27 4.04H6.41L17.8 19.86Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* =====================================
              PRODUCT
          ====================================== */}

          <div className="footer-column">
            <h3>Product</h3>

            <Link to="/#features">Features</Link>

            <Link to="/#how-it-works">How It Works</Link>

            <Link to="/#pricing">Pricing</Link>

            <Link to="/dashboard">Dashboard</Link>
          </div>

          {/* =====================================
              COMPANY
          ====================================== */}

          <div className="footer-column">
            <h3>Company</h3>

            <Link to="/#about">About</Link>

            <Link to="/#contact">Contact</Link>

            <Link to="#">Careers</Link>

            <Link to="#">Blog</Link>
          </div>

          {/* =====================================
              RESOURCES
          ====================================== */}

          <div className="footer-column">
            <h3>Resources</h3>

            <Link to="#">Help Center</Link>

            <Link to="#">Documentation</Link>

            <Link to="#">Community</Link>

            <Link to="#">Support</Link>
          </div>
        </div>

        {/* =========================================
            DIVIDER
        ========================================== */}

        <div className="footer-divider" />

        {/* =========================================
            BOTTOM FOOTER
        ========================================== */}

        <div className="footer-bottom">
          <p>© {currentYear} NovaHub. All rights reserved.</p>

          <div className="footer-legal">
            <Link to="#">Privacy</Link>

            <span>•</span>

            <Link to="#">Terms</Link>
          </div>

          <div className="footer-status">
            <span className="status-dot" />

            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
