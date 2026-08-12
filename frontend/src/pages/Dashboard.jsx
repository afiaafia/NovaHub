import { useEffect, useState } from 'react';
import { getSpaces, createSpace } from '../services/spaceService';
import './Dashboard.css';

const Dashboard = () => {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [creating, setCreating] = useState(false);
  const [formError, setFormError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    icon: '🚀',
    color: '#6366f1',
  });

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

  useEffect(() => {
    loadSpaces();
  }, []);

  const openCreateModal = () => {
    setFormError('');
    setShowCreateModal(true);
  };

  const closeCreateModal = () => {
    if (creating) return;

    setShowCreateModal(false);
    setFormError('');

    setFormData({
      name: '',
      description: '',
      icon: '🚀',
      color: '#6366f1',
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (formError) {
      setFormError('');
    }
  };

  const handleCreateSpace = async (event) => {
    event.preventDefault();

    if (!formData.name.trim()) {
      setFormError('Space name is required.');
      return;
    }

    try {
      setCreating(true);
      setFormError('');

      await createSpace({
        name: formData.name.trim(),
        description: formData.description.trim(),
        icon: formData.icon.trim() || '🚀',
        color: formData.color,
      });

      await loadSpaces();

      setFormData({
        name: '',
        description: '',
        icon: '🚀',
        color: '#6366f1',
      });

      setShowCreateModal(false);
    } catch (err) {
      console.error('Failed to create space:', err);

      setFormError(
        err?.response?.data?.message ||
          'Unable to create space. Please try again.'
      );
    } finally {
      setCreating(false);
    }
  };

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

          <button
            className="dashboard-primary-button"
            type="button"
            onClick={openCreateModal}
          >
            + Create Space
          </button>
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

            <button
              className="dashboard-primary-button state-action-button"
              type="button"
              onClick={loadSpaces}
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && spaces.length === 0 && (
          <div className="dashboard-state empty-state">
            <div className="state-icon">+</div>

            <h3>No spaces yet</h3>

            <p>Create your first space to start organizing your work.</p>

            <button
              className="dashboard-primary-button"
              type="button"
              onClick={openCreateModal}
            >
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
            <button
              className="create-card"
              type="button"
              onClick={openCreateModal}
            >
              <div className="create-icon">+</div>

              <h3>Create a new space</h3>

              <p>Start organizing something new.</p>
            </button>
          </div>
        )}

        {/* Create Space Modal */}
        {showCreateModal && (
          <div className="modal-overlay" onClick={closeCreateModal}>
            <div
              className="create-modal"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="modal-header">
                <div>
                  <span className="dashboard-eyebrow">NEW SPACE</span>

                  <h2>Create a Space</h2>

                  <p>
                    Create a dedicated space for your work, learning, or
                    projects.
                  </p>
                </div>

                <button
                  className="modal-close"
                  type="button"
                  onClick={closeCreateModal}
                  disabled={creating}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleCreateSpace}>
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="space-name">Space Name</label>

                  <input
                    id="space-name"
                    name="name"
                    className="form-input"
                    type="text"
                    placeholder="e.g. Web Development"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={creating}
                    autoFocus
                  />
                </div>

                {/* Description */}
                <div className="form-group">
                  <label htmlFor="space-description">Description</label>

                  <textarea
                    id="space-description"
                    name="description"
                    className="form-textarea"
                    placeholder="What will you use this space for?"
                    value={formData.description}
                    onChange={handleInputChange}
                    disabled={creating}
                    rows="4"
                  />
                </div>

                {/* Icon + Color */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="space-icon">Icon</label>

                    <input
                      id="space-icon"
                      name="icon"
                      className="form-input"
                      type="text"
                      placeholder="🚀"
                      maxLength="4"
                      value={formData.icon}
                      onChange={handleInputChange}
                      disabled={creating}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="space-color">Color</label>

                    <input
                      id="space-color"
                      name="color"
                      className="color-input"
                      type="color"
                      value={formData.color}
                      onChange={handleInputChange}
                      disabled={creating}
                    />
                  </div>
                </div>

                {/* Error */}
                {formError && <div className="form-error">{formError}</div>}

                {/* Actions */}
                <div className="modal-actions">
                  <button
                    className="cancel-button"
                    type="button"
                    onClick={closeCreateModal}
                    disabled={creating}
                  >
                    Cancel
                  </button>

                  <button
                    className="create-button"
                    type="submit"
                    disabled={creating}
                  >
                    {creating ? 'Creating...' : 'Create Space'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
