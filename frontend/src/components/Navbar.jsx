import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

const navItems = [
  {
    label: 'Features',
    target: 'features',
  },
  {
    label: 'How It Works',
    target: 'how-it-works',
  },
  {
    label: 'Pricing',
    target: 'pricing',
  },
  {
    label: 'About',
    target: 'about',
  },
  {
    label: 'Blog',
    target: 'blog',
  },
  {
    label: 'Contact',
    target: 'contact',
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  /* =========================
     Scroll State
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* =========================
     Active Section Observer
  ========================= */

  useEffect(() => {
    const sections = navItems
      .map(({ target }) => document.getElementById(target))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  /* =========================
     Mobile Menu
  ========================= */

  useEffect(() => {
    document.body.classList.toggle('nav-menu-open', isMenuOpen);

    return () => {
      document.body.classList.remove('nav-menu-open');
    };
  }, [isMenuOpen]);

  /* =========================
     ESC Key
  ========================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  /* =========================
     Navigation
  ========================= */

  const handleNavClick = (target) => {
    setIsMenuOpen(false);

    const section = document.getElementById(target);

    if (!section) return;

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  /* =========================
     Render
  ========================= */

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="navbar">
        {/* =====================
            Brand
        ===================== */}

        <Logo />

        {/* =====================
            Desktop Navigation
        ===================== */}

        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              className={`nav-link ${
                activeSection === item.target ? 'active' : ''
              }`}
              onClick={() => handleNavClick(item.target)}
            >
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* =====================
            Desktop CTA
        ===================== */}

        <Link to="/dashboard" className="nav-button">
          <span>Get Started</span>
          <span className="nav-button-arrow">↗</span>
        </Link>

        {/* =====================
            Mobile Menu Button
        ===================== */}

        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((previous) => !previous)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* =========================
          Mobile Navigation
      ========================= */}

      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <button
                key={item.target}
                type="button"
                className={`mobile-nav-link ${
                  activeSection === item.target ? 'active' : ''
                }`}
                onClick={() => handleNavClick(item.target)}
              >
                <span>{item.label}</span>

                <span className="mobile-link-arrow">↗</span>
              </button>
            ))}
          </div>

          <Link
            to="/dashboard"
            className="mobile-cta"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
            <span>↗</span>
          </Link>
        </div>
      </div>

      {/* =========================
          Mobile Backdrop
      ========================= */}

      <button
        type="button"
        className={`mobile-backdrop ${
          isMenuOpen ? 'mobile-backdrop-visible' : ''
        }`}
        aria-label="Close navigation menu"
        onClick={() => setIsMenuOpen(false)}
      />
    </header>
  );
};

export default Navbar;
