import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo">
          Nova<span>Hub</span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Link to="/dashboard" className="nav-button">
          Explore
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
