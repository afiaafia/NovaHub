import { useEffect, useState } from 'react';
import { getSpaces } from '../services/spaceService';
import './Dashboard.css';

const Dashboard = () => {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadSpaces = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await getSpaces();

        setSpaces(response.data || []);
      } catch (err) {
        console.error('Failed to load spaces:', err);
        setError('Unable to load your spaces. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadSpaces();
  }, []);

  return (
    <section className="dashboard-page">
      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <div>
            <span className="dashboard-eyebrow">WORKSPACE</span>

            <h1>Your Spaces</h1>

            <p>Organize your work, learning, and projects.</p>
          </div>

          <button className="dashboard-primary-button">+ Create Space</button>
        </div>

        {/* Loading */}
        {loading && (
          <div className="dashboard-state">
            <div className="loading-spinner"></div>

            <p>Loading your spaces...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="dashboard-state error-state">
            <div className="state-icon">!</div>

            <h3>Something went wrong</h3>

            <p>{error}</p>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && spaces.length === 0 && (
          <div className="dashboard-state empty-state">
            <div className="state-icon">+</div>

            <h3>No spaces yet</h3>

            <p>Create your first space to start organizing your work.</p>

            <button className="dashboard-primary-button">
              Create Your First Space
            </button>
          </div>
        )}

        {/* Spaces */}
        {!loading && !error && spaces.length > 0 && (
          <div className="space-grid">
            {spaces.map((space) => (
              <article className="space-card" key={space._id}>
                <div className="space-card-top">
                  <div
                    className="space-icon"
                    style={{
                      backgroundColor: `${space.color || '#6366f1'}20`,
                    }}
                  >
                    {space.icon || '🚀'}
                  </div>

                  <button
                    className="menu-button"
                    type="button"
                    aria-label={`Options for ${space.name}`}
                  >
                    ⋯
                  </button>
                </div>

                <h3>{space.name}</h3>

                <p>{space.description || 'No description available.'}</p>

                <div className="space-card-footer">
                  <span>Space</span>

                  <span className="space-arrow">→</span>
                </div>
              </article>
            ))}

            {/* Create new space card */}
            <button className="create-card" type="button">
              <div className="create-icon">+</div>

              <h3>Create a new space</h3>

              <p>Start organizing something new.</p>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
