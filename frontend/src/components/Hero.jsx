import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* =========================
          Background Effects
      ========================== */}
      <div className="hero-bg">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>
        <div className="hero-glow hero-glow-three"></div>

        <div className="hero-stars"></div>

        <div className="hero-orbit hero-orbit-one"></div>
        <div className="hero-orbit hero-orbit-two"></div>

        <div className="hero-planet">
          <div className="planet-glow"></div>
        </div>
      </div>

      <div className="hero-container">
        {/* =========================
            Left Content
        ========================== */}
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <span className="badge-icon">✦</span>
            <span>Your Personal Digital Command Center</span>
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            <span>Your Space.</span>
            <span>Your Flow.</span>
            <span className="hero-title-gradient">Your Progress.</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            NovaHub helps you organize tasks, manage projects, track learning,
            set goals, and analyze your productivity — all in one intelligent
            workspace.
          </p>

          {/* CTA */}
          <div className="hero-actions">
            <a href="#features" className="hero-button hero-button-primary">
              <span>Get Started Free</span>
              <span className="button-arrow">→</span>
            </a>

            <a href="#dashboard" className="hero-button hero-button-secondary">
              <span>Explore NovaHub</span>
              <span className="button-play">▷</span>
            </a>
          </div>

          {/* Social Proof */}
          <div className="hero-social-proof">
            <div className="hero-avatars">
              <div className="avatar avatar-one">A</div>
              <div className="avatar avatar-two">J</div>
              <div className="avatar avatar-three">S</div>
              <div className="avatar avatar-four">M</div>
            </div>

            <div className="hero-rating">
              <div className="rating-stars">★★★★★</div>

              <div className="rating-text">
                <strong>4.9/5</strong>
                <span>Join 10,000+ productive creators</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            Right Dashboard Preview
        ========================== */}
        <div className="hero-visual" id="dashboard">
          {/* Floating top card */}
          <div className="floating-card floating-card-progress">
            <div className="floating-card-icon">↗</div>

            <div>
              <span>Weekly Progress</span>
              <strong>84%</strong>
            </div>

            <div className="mini-progress">
              <span></span>
            </div>
          </div>

          {/* Dashboard */}
          <div className="dashboard-preview">
            {/* Dashboard top bar */}
            <div className="dashboard-topbar">
              <div className="dashboard-brand">
                <div className="dashboard-logo">N</div>

                <span>NovaHub</span>
              </div>

              <div className="dashboard-search">
                <span className="search-icon">⌕</span>
                <span>Search anything...</span>
                <kbd>⌘ K</kbd>
              </div>

              <div className="dashboard-actions">
                <button type="button" aria-label="Notifications">
                  ♢
                </button>

                <button type="button" aria-label="Settings">
                  ◌
                </button>

                <div className="dashboard-avatar">A</div>
              </div>
            </div>

            {/* Dashboard body */}
            <div className="dashboard-body">
              {/* Sidebar */}
              <aside className="dashboard-sidebar">
                <div className="sidebar-section">
                  <span className="sidebar-label">Workspace</span>

                  <div className="sidebar-item sidebar-item-active">
                    <span>◈</span>
                    Overview
                  </div>

                  <div className="sidebar-item">
                    <span>□</span>
                    Tasks
                  </div>

                  <div className="sidebar-item">
                    <span>◇</span>
                    Projects
                  </div>

                  <div className="sidebar-item">
                    <span>▤</span>
                    Notes
                  </div>
                </div>

                <div className="sidebar-section sidebar-growth">
                  <span className="sidebar-label">Growth</span>

                  <div className="sidebar-item">
                    <span>◫</span>
                    Learning
                  </div>

                  <div className="sidebar-item">
                    <span>◎</span>
                    Goals
                  </div>

                  <div className="sidebar-item">
                    <span>⌁</span>
                    Analytics
                  </div>
                </div>

                <div className="sidebar-section sidebar-system">
                  <span className="sidebar-label">System</span>

                  <div className="sidebar-item">
                    <span>⚙</span>
                    Settings
                  </div>
                </div>
              </aside>

              {/* Main dashboard */}
              <main className="dashboard-main">
                {/* Welcome */}
                <div className="dashboard-welcome">
                  <div>
                    <span className="dashboard-date">Tuesday, 06 August</span>

                    <h3>
                      Good morning, Afia! <span>👋</span>
                    </h3>

                    <p>Ready to conquer your workspace?</p>
                  </div>

                  <div className="dashboard-focus">
                    <span>Focus time</span>
                    <strong>42m</strong>
                  </div>
                </div>

                {/* Stats */}
                <div className="dashboard-stats">
                  <div className="stat-card">
                    <div className="stat-card-top">
                      <span>Tasks</span>
                      <i>✓</i>
                    </div>

                    <strong>08</strong>
                    <small>Pending</small>
                  </div>

                  <div className="stat-card">
                    <div className="stat-card-top">
                      <span>Focus</span>
                      <i>◷</i>
                    </div>

                    <strong>42m</strong>
                    <small>Today</small>
                  </div>

                  <div className="stat-card stat-card-green">
                    <div className="stat-card-top">
                      <span>Goals</span>
                      <i>◎</i>
                    </div>

                    <strong>72%</strong>
                    <small>Progress</small>
                  </div>

                  <div className="stat-card">
                    <div className="stat-card-top">
                      <span>Projects</span>
                      <i>□</i>
                    </div>

                    <strong>05</strong>
                    <small>Active</small>
                  </div>
                </div>

                {/* Dashboard lower area */}
                <div className="dashboard-grid">
                  {/* Productivity chart */}
                  <div className="dashboard-card productivity-card">
                    <div className="card-header">
                      <div>
                        <span className="card-label">
                          Productivity Overview
                        </span>

                        <strong>This Week</strong>
                      </div>

                      <button type="button">Weekly⌄</button>
                    </div>

                    <div className="chart-area">
                      <div className="chart-lines">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <svg
                        className="productivity-chart"
                        viewBox="0 0 500 170"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <defs>
                          <linearGradient
                            id="chartGradient"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="0"
                          >
                            <stop offset="0%" stopColor="#7c3aed" />

                            <stop offset="100%" stopColor="#22d3ee" />
                          </linearGradient>

                          <linearGradient
                            id="chartFill"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="#7c3aed"
                              stopOpacity="0.28"
                            />

                            <stop
                              offset="100%"
                              stopColor="#7c3aed"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>

                        <path
                          d="M0 125 C45 90, 65 105, 100 78 S155 105, 190 70 S245 48, 275 83 S330 108, 365 80 S425 95, 500 35 L500 170 L0 170 Z"
                          fill="url(#chartFill)"
                        />

                        <path
                          d="M0 125 C45 90, 65 105, 100 78 S155 105, 190 70 S245 48, 275 83 S330 108, 365 80 S425 95, 500 35"
                          fill="none"
                          stroke="url(#chartGradient)"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />

                        <circle cx="275" cy="83" r="6" fill="#8b5cf6" />

                        <circle cx="500" cy="35" r="6" fill="#22d3ee" />
                      </svg>

                      <div className="chart-tooltip">84%</div>
                    </div>

                    <div className="chart-days">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </div>

                  {/* Tasks */}
                  <div className="dashboard-card tasks-card">
                    <div className="card-header">
                      <span className="card-label">Today's Tasks</span>

                      <button type="button">View All</button>
                    </div>

                    <div className="task-list">
                      <div className="task-item">
                        <span className="task-check"></span>

                        <div className="task-name">
                          Complete ES6 Array Methods
                        </div>

                        <span className="task-tag task-high">High</span>
                      </div>

                      <div className="task-item">
                        <span className="task-check"></span>

                        <div className="task-name">Build NovaHub UI</div>

                        <span className="task-tag task-medium">Medium</span>
                      </div>

                      <div className="task-item">
                        <span className="task-check"></span>

                        <div className="task-name">
                          Read React Documentation
                        </div>

                        <span className="task-tag task-low">Low</span>
                      </div>

                      <div className="task-item">
                        <span className="task-check"></span>

                        <div className="task-name">
                          Practice Coding Problems
                        </div>

                        <span className="task-tag task-medium">Medium</span>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>

          {/* Floating task card */}
          <div className="floating-card floating-card-task">
            <div className="task-floating-icon">✓</div>

            <div>
              <span>Task Completed</span>
              <strong>Just now</strong>
            </div>

            <div className="floating-check">✓</div>
          </div>

          {/* Floating productivity card */}
          <div className="floating-card floating-card-productivity">
            <span>Productivity</span>

            <strong>+24%</strong>

            <small>this week</small>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="hero-bottom-fade"></div>
    </section>
  );
};

export default Hero;
