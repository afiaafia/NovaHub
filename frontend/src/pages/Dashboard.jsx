import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSpaces } from '../services/spaceService';
import './Dashboard.css';

const Dashboard = () => {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let ignore = false;

    const fetchSpaces = async () => {
      try {
        setLoading(true);
        setError('');

        const result = await getSpaces();

        if (!ignore) {
          setSpaces(result?.data || []);
        }
      } catch (err) {
        if (!ignore) {
          console.error('Failed to load spaces:', err);
          setError('Failed to load spaces. Please try again.');
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    fetchSpaces();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section className="dashboard-page">
      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <div>
            <span className="dashboard-badge">NovaHub Dashboard</span>

            <h1>
              Your <span>Spaces</span>
            </h1>

            <p>
              Organize your projects, learning, goals and ideas in one place.
            </p>
          </div>

          <Link to="/" className="dashboard-home-btn">
            ← Back Home
          </Link>
        </div>

        {/* Loading */}
        {loading && (
          <div className="dashboard-state">
            <div className="dashboard-spinner"></div>
            <p>Loading your spaces...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="dashboard-state dashboard-error">
            <h3>Something went wrong</h3>
            <p>{error}</p>

            <button type="button" onClick={() => window.location.reload()}>
              Try Again
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && spaces.length === 0 && (
          <div className="dashboard-empty">
            <div className="empty-icon">✦</div>

            <h2>No spaces yet</h2>

            <p>
              Your NovaHub workspace is ready. Create your first space to get
              started.
            </p>

            <button type="button" className="create-space-btn">
              + Create Your First Space
            </button>
          </div>
        )}

        {/* Spaces */}
        {!loading && !error && spaces.length > 0 && (
          <div className="spaces-grid">
            {spaces.map((space) => (
              <Link
                to={`/spaces/${space._id}`}
                className="space-card"
                key={space._id}
              >
                <div
                  className="space-icon"
                  style={{
                    background: space.color || '#6366f1',
                  }}
                >
                  {space.icon || '✦'}
                </div>

                <div className="space-card-content">
                  <h3>{space.name}</h3>

                  <p>{space.description || 'No description available.'}</p>
                </div>

                <span className="space-arrow">→</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
