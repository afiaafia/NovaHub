const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <span className="hero-badge">✦ Your Digital Workspace</span>

          <h1 className="hero-title">
            Everything You Need.
            <span> One Space.</span>
          </h1>

          <p className="hero-description">
            NovaHub helps you organize your learning, projects, ideas, and
            personal goals in one powerful digital workspace.
          </p>

          <div className="hero-actions">
            <a href="#spaces" className="hero-btn hero-btn-primary">
              Get Started
              <span>→</span>
            </a>

            <a href="#features" className="hero-btn hero-btn-secondary">
              Explore Features
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>01</strong>
              <span>Workspace</span>
            </div>

            <div className="hero-stat-divider"></div>

            <div className="hero-stat">
              <strong>∞</strong>
              <span>Possibilities</span>
            </div>

            <div className="hero-stat-divider"></div>

            <div className="hero-stat">
              <strong>24/7</strong>
              <span>Access</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual">
          <div className="hero-glow"></div>

          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>

          <div className="workspace-card">
            <div className="workspace-header">
              <div className="workspace-brand">
                <div className="workspace-logo">✦</div>

                <div>
                  <span className="workspace-label">NOVAHUB</span>

                  <p>My Workspace</p>
                </div>
              </div>

              <div className="workspace-status">
                <span></span>
                Active
              </div>
            </div>

            <div className="workspace-content">
              <div className="workspace-heading">
                <span>Good morning 👋</span>
                <h3>Welcome back</h3>
              </div>

              <div className="workspace-grid">
                <div className="mini-card">
                  <div className="mini-card-icon">💻</div>
                  <span>Web Development</span>
                  <small>12 Tasks</small>
                </div>

                <div className="mini-card">
                  <div className="mini-card-icon">📚</div>
                  <span>Learning</span>
                  <small>8 Tasks</small>
                </div>

                <div className="mini-card">
                  <div className="mini-card-icon">🚀</div>
                  <span>Projects</span>
                  <small>5 Active</small>
                </div>

                <div className="mini-card">
                  <div className="mini-card-icon">💡</div>
                  <span>Ideas</span>
                  <small>24 Saved</small>
                </div>
              </div>

              <div className="workspace-progress">
                <div className="progress-header">
                  <span>Weekly Progress</span>
                  <strong>78%</strong>
                </div>

                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="floating-card floating-card-top">
            <span className="floating-icon">✓</span>

            <div>
              <strong>Task Completed</strong>
              <small>Just now</small>
            </div>
          </div>

          <div className="floating-card floating-card-bottom">
            <span className="floating-icon">⚡</span>

            <div>
              <strong>Productivity</strong>
              <small>+24% this week</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
