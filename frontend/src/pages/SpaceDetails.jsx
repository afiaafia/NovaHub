import { Link } from 'react-router-dom';

const SpaceDetails = () => {
  return (
    <section className="space-details-page">
      <div className="container">
        <Link to="/dashboard" className="back-link">
          ← Back to Spaces
        </Link>

        <div className="space-details">
          <div className="details-icon">🌐</div>

          <span className="eyebrow">DIGITAL SPACE</span>

          <h1>Modern Web Development</h1>

          <p className="details-description">
            Learning HTML, CSS, JavaScript, React and backend development.
          </p>

          <div className="details-actions">
            <button className="primary-button">Edit Space</button>

            <button className="danger-button">Delete Space</button>
          </div>

          <div className="details-meta">
            <div>
              <span>Created</span>
              <strong>August 7, 2026</strong>
            </div>

            <div>
              <span>Status</span>
              <strong>Active</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceDetails;
