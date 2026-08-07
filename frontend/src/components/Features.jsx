import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <span className="footer-logo-mark">N</span>
            <span>NovaHub</span>
          </a>

          <p>
            Your personal digital workspace for organizing ideas, projects,
            knowledge, and everything that matters.
          </p>

          <div className="footer-socials">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              X
            </a>
          </div>
        </div>

        {/* Product */}
        <div className="footer-column">
          <h3>Product</h3>

          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h3>Resources</h3>

          <a href="#contact">Contact</a>
          <a href="#features">Documentation</a>
          <a href="#features">Community</a>
          <a href="#features">Help Center</a>
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h3>Legal</h3>

          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookie Policy</a>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© {currentYear} NovaHub. All rights reserved.</p>

          <p className="footer-made-with">
            Built with <span>♥</span> for better productivity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
