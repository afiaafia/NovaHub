import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = ({ showText = true }) => {
  return (
    <Link to="/" className="logo">
      <img src="/logo.png" alt="NovaHub" className="logo-image" />

      {showText && <span className="logo-text">NovaHub</span>}
    </Link>
  );
};

export default Logo;
