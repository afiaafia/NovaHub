const Dashboard = () => {
  return (
    <section className="dashboard-page">
      <div className="container">
        <div className="dashboard-header">
          <div>
            <span className="eyebrow">WORKSPACE</span>

            <h1>Your Spaces</h1>

            <p>Organize your work, learning, and projects.</p>
          </div>

          <button className="primary-button">+ Create Space</button>
        </div>

        <div className="space-grid">
          <article className="space-card">
            <div className="space-card-top">
              <div className="space-icon">🌐</div>

              <button className="menu-button">⋯</button>
            </div>

            <h3>Modern Web Development</h3>

            <p>
              Learning HTML, CSS, JavaScript, React and backend development.
            </p>

            <div className="space-card-footer">
              <span>Updated recently</span>

              <span>→</span>
            </div>
          </article>

          <article className="space-card">
            <div className="space-card-top">
              <div className="space-icon">🤖</div>

              <button className="menu-button">⋯</button>
            </div>

            <h3>AI & Machine Learning</h3>

            <p>
              Exploring artificial intelligence, machine learning and
              intelligent systems.
            </p>

            <div className="space-card-footer">
              <span>Coming soon</span>

              <span>→</span>
            </div>
          </article>

          <article className="create-card">
            <div className="create-icon">+</div>

            <h3>Create a new space</h3>

            <p>Start organizing something new.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
