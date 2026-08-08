import './TrustedBy.css';

const TrustedBy = () => {
  const companies = [
    {
      name: 'Google',
      className: 'trusted-google',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M21.35 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.95 2.94v2.45h3.15c1.85-1.7 2.91-4.21 2.91-7.42Z"
            fill="currentColor"
          />
          <path
            d="M12 21.5c2.65 0 4.87-.88 6.49-2.38l-3.15-2.45c-.88.59-2 .94-3.34.94-2.56 0-4.73-1.73-5.51-4.06H3.23V16.1A9.8 9.8 0 0 0 12 21.5Z"
            fill="currentColor"
            opacity=".82"
          />
          <path
            d="M6.49 13.55A5.9 5.9 0 0 1 6.18 12c0-.54.1-1.07.31-1.55V8.1H3.23A9.8 9.8 0 0 0 2.2 12c0 1.58.38 3.08 1.03 4.4l3.26-2.85Z"
            fill="currentColor"
            opacity=".65"
          />
          <path
            d="M12 6.39c1.45 0 2.75.5 3.77 1.48l2.83-2.83C16.86 3.45 14.64 2.5 12 2.5a9.8 9.8 0 0 0-8.77 5.6l3.26 2.35C7.27 8.12 9.44 6.39 12 6.39Z"
            fill="currentColor"
            opacity=".95"
          />
        </svg>
      ),
    },

    {
      name: 'Microsoft',
      className: 'trusted-microsoft',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="2" y="2" width="9" height="9" fill="currentColor" />
          <rect
            x="13"
            y="2"
            width="9"
            height="9"
            fill="currentColor"
            opacity=".8"
          />
          <rect
            x="2"
            y="13"
            width="9"
            height="9"
            fill="currentColor"
            opacity=".72"
          />
          <rect
            x="13"
            y="13"
            width="9"
            height="9"
            fill="currentColor"
            opacity=".92"
          />
        </svg>
      ),
    },

    {
      name: 'GitHub',
      className: 'trusted-github',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.2c-3.22.7-3.9-1.37-3.9-1.37-.53-1.35-1.3-1.7-1.3-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.57-.29-5.28-1.29-5.28-5.72 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.48.12-3.07 0 0 .98-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.07.75.81 1.2 1.84 1.2 3.1 0 4.44-2.71 5.42-5.29 5.71.42.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"
          />
        </svg>
      ),
    },

    {
      name: 'spotify',
      displayName: 'spotify',
      className: 'trusted-spotify',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="10.5" fill="currentColor" />
          <path
            d="M7 9.2c3.3-1 6.9-.75 10.02.65"
            fill="none"
            stroke="#03040b"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M7.8 12.2c2.75-.72 5.7-.5 8.35.65"
            fill="none"
            stroke="#03040b"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M8.55 15c2.15-.48 4.25-.27 6.25.55"
            fill="none"
            stroke="#03040b"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      ),
    },

    {
      name: 'Notion',
      className: 'trusted-notion',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M8 17V7l8 10V7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },

    {
      name: 'Vercel',
      className: 'trusted-vercel',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 4 21.5 20H2.5L12 4Z" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section className="trusted-section" aria-label="Trusted companies">
      <div className="trusted-container">
        <div className="trusted-heading">
          <span className="trusted-line" />
          <p>Trusted by developers &amp; creators from</p>
          <span className="trusted-line" />
        </div>

        <div className="trusted-logos">
          {companies.map((company) => (
            <div
              className={`trusted-company ${company.className}`}
              key={company.name}
              title={company.name}
            >
              <span className="trusted-icon">{company.icon}</span>

              <span className="trusted-name">
                {company.displayName || company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
