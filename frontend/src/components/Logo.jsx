import './Logo.css';

const Logo = ({ size = 'medium', showText = true }) => {
  return (
    <a
      href="/"
      className={`nova-logo nova-logo-${size}`}
      aria-label="NovaHub Home"
    >
      <span className="nova-logo-mark">
        <svg
          className="nova-logo-svg"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* Main gradient */}
            <linearGradient
              id="novaGradient"
              x1="8"
              y1="52"
              x2="56"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="48%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#22D3EE" />
            </linearGradient>

            {/* Secondary gradient */}
            <linearGradient
              id="novaGradientSecondary"
              x1="12"
              y1="12"
              x2="54"
              y2="54"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>

            {/* Glow */}
            <filter
              id="novaGlow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="2.5" result="blur" />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Strong glow */}
            <filter
              id="novaStrongGlow"
              x="-200%"
              y="-200%"
              width="400%"
              height="400%"
            >
              <feGaussianBlur stdDeviation="3.5" result="blur" />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer orbit / motion trail */}
          <path
            className="nova-orbit"
            d="M8 46C14 28 29 12 45 10C52 9 56 12 55 17C53 26 39 38 25 47C17 52 10 54 8 50C7.5 49 7.5 47.5 8 46Z"
            stroke="url(#novaGradientSecondary)"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.55"
          />

          {/* Main abstract N */}
          <path
            className="nova-main-path"
            d="M10 48L20 18L31 42L43 14L54 44"
            stroke="url(#novaGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#novaGlow)"
          />

          {/* Inner flowing stroke */}
          <path
            className="nova-inner-path"
            d="M14 46L21 25L31 47L42 21L50 42"
            stroke="url(#novaGradientSecondary)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />

          {/* Orbit particle */}
          <circle
            className="nova-particle nova-particle-one"
            cx="8"
            cy="46"
            r="2.2"
            fill="#A855F7"
            filter="url(#novaStrongGlow)"
          />

          <circle
            className="nova-particle nova-particle-two"
            cx="54"
            cy="44"
            r="1.8"
            fill="#22D3EE"
            filter="url(#novaStrongGlow)"
          />

          {/* Tiny star particles */}
          <circle
            className="nova-star nova-star-one"
            cx="18"
            cy="10"
            r="0.9"
            fill="#C084FC"
          />

          <circle
            className="nova-star nova-star-two"
            cx="49"
            cy="7"
            r="0.7"
            fill="#67E8F9"
          />

          <circle
            className="nova-star nova-star-three"
            cx="57"
            cy="28"
            r="0.6"
            fill="#A78BFA"
          />
        </svg>
      </span>

      {showText && (
        <span className="nova-logo-text">
          <span className="nova-word">Nova</span>
          <span className="hub-word">Hub</span>
        </span>
      )}
    </a>
  );
};

export default Logo;
