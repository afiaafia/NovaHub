import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Content */}
        <div className="about-content">
          <span className="about-badge">ABOUT NOVAHUB</span>

          <h2>
            One workspace.
            <br />
            <span>Everything organized.</span>
          </h2>

          <p className="about-description">
            NovaHub is a personal digital workspace designed to help you
            organize your learning, projects, ideas, and daily tasks in one
            focused environment.
          </p>

          <p className="about-description secondary">
            Instead of jumping between different apps, NovaHub gives you a
            simple place to manage everything that matters.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <span className="stat-number">01</span>
              <span className="stat-label">Unified Workspace</span>
            </div>

            <div className="about-stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Possibilities</span>
            </div>

            <div className="about-stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Your Space</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="about-visual">
          <div className="about-card main-card">
            <div className="card-top">
              <div className="card-icon">✦</div>

              <div>
                <span className="card-label">YOUR WORKSPACE</span>
                <h3>NovaHub</h3>
              </div>
            </div>

            <div className="workspace-preview">
              <div className="preview-item">
                <span className="preview-icon">📚</span>
                <div>
                  <strong>Learning</strong>
                  <small>Courses & Notes</small>
                </div>
              </div>

              <div className="preview-item">
                <span className="preview-icon">💻</span>
                <div>
                  <strong>Projects</strong>
                  <small>Build & Create</small>
                </div>
              </div>

              <div className="preview-item">
                <span className="preview-icon">💡</span>
                <div>
                  <strong>Ideas</strong>
                  <small>Think & Explore</small>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <span>Everything in one place</span>
              <span className="footer-arrow">→</span>
            </div>
          </div>

          <div className="floating-card floating-card-one">
            <span>✓</span>
            <div>
              <strong>Stay organized</strong>
              <small>Focus on what matters</small>
            </div>
          </div>

          <div className="floating-card floating-card-two">
            <span>⚡</span>
            <div>
              <strong>Work smarter</strong>
              <small>Less switching, more doing</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
