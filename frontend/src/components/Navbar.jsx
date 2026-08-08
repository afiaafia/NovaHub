import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        {/* Brand */}
        <Link to="/" className="navbar-brand">
          <div className="logo-placeholder">LOGO</div>

          <span className="brand-name">NovaHub</span>
        </Link>

        {/* Navigation */}
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>

        {/* CTA */}
        <Link to="/dashboard" className="nav-button">
          Get Started
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
