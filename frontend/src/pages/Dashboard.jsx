import { useEffect, useState } from 'react';
import { getSpaces, createSpace, deleteSpace } from '../services/spaceService';

import './Dashboard.css';

const DEFAULT_FORM = {
  name: '',
  description: '',
  icon: '🚀',
  color: '#6366f1',
};

const Dashboard = () => {
  const [spaces, setSpaces] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [creating, setCreating] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState(DEFAULT_FORM);

  // ================================
  // LOAD SPACES
  // ================================

  const loadSpaces = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await getSpaces();

      /*
        Backend response:
        {
          success: true,
          data: [...]
        }
      */

      setSpaces(Array.isArray(response?.data) ? response.data : []);
    } catch (err) {
      console.error('Failed to load spaces:', err);

      setError(err?.message || 'Unable to load your spaces. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSpaces();
  }, []);

  // ================================
  // MODAL
  // ================================

  const openCreateModal = () => {
    setFormError('');
    setFormData(DEFAULT_FORM);
    setShowCreateModal(true);
  };

  const closeCreateModal = () => {
    if (creating) return;

    setShowCreateModal(false);
    setFormError('');
    setFormData(DEFAULT_FORM);
  };

  // ================================
  // FORM INPUT
  // ================================

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

  // ================================
  // CREATE SPACE
  // ================================

  const handleCreateSpace = async (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const description = formData.description.trim();
    const icon = formData.icon.trim() || '🚀';

    if (!name) {
      setFormError('Space name is required.');
      return;
    }

    try {
      setCreating(true);
      setFormError('');

      await createSpace({
        name,
        description,
        icon,
        color: formData.color,
      });

      await loadSpaces();

      setShowCreateModal(false);
      setFormData(DEFAULT_FORM);
    } catch (err) {
      console.error('Failed to create space:', err);

      setFormError(err?.message || 'Unable to create space. Please try again.');
    } finally {
      setCreating(false);
    }
  };

  // ================================
  // DELETE SPACE
  // ================================

  const handleDeleteSpace = async (id) => {
    if (!id) return;

    const confirmed = window.confirm(
      'Are you sure you want to delete this space?'
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);

      await deleteSpace(id);

      setSpaces((previous) => previous.filter((space) => space._id !== id));
    } catch (err) {
      console.error('Failed to delete space:', err);

      setError(err?.message || 'Unable to delete the space. Please try again.');
    } finally {
      setDeletingId(null);
    }
  };

  // ================================
  // RENDER
  // ================================

  return (
    <section className="dashboard-page">
      <div className="dashboard-container">
        {/* ================= HEADER ================= */}

        <div className="dashboard-header">
          <div>
            <span className="dashboard-eyebrow">WORKSPACE</span>

            <h1>Your Spaces</h1>

            <p>
              Organize your work, learning, and projects in one focused
              workspace.
            </p>
          </div>

          <button
            className="dashboard-primary-button"
            type="button"
            onClick={openCreateModal}
          >
            + Create Space
          </button>
        </div>

        {/* ================= LOADING ================= */}

        {loading && (
          <div className="dashboard-state">
            <div className="loading-spinner" />

            <p>Loading your spaces...</p>
          </div>
        )}

        {/* ================= ERROR ================= */}

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

        {/* ================= EMPTY ================= */}

        {!loading && !error && spaces.length === 0 && (
          <div className="dashboard-state empty-state">
            <div className="state-icon">+</div>

            <h3>No spaces yet</h3>

            <p>
              Create your first space to start organizing your work and ideas.
            </p>

            <button
              className="dashboard-primary-button"
              type="button"
              onClick={openCreateModal}
            >
              Create Your First Space
            </button>
          </div>
        )}

        {/* ================= SPACES ================= */}

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
                    aria-label={`Delete ${space.name}`}
                    onClick={() => handleDeleteSpace(space._id)}
                    disabled={deletingId === space._id}
                  >
                    {deletingId === space._id ? '...' : '⋯'}
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

            {/* CREATE CARD */}

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

        {/* ================= CREATE MODAL ================= */}

        {showCreateModal && (
          <div className="modal-overlay" onClick={closeCreateModal}>
            <div
              className="create-modal"
              onClick={(event) => event.stopPropagation()}
            >
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

              <form onSubmit={handleCreateSpace}>
                {/* NAME */}

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

                {/* DESCRIPTION */}

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
                    rows={4}
                  />
                </div>

                {/* ICON + COLOR */}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="space-icon">Icon</label>

                    <input
                      id="space-icon"
                      name="icon"
                      className="form-input"
                      type="text"
                      placeholder="🚀"
                      maxLength={4}
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

                {/* FORM ERROR */}

                {formError && <div className="form-error">{formError}</div>}

                {/* ACTIONS */}

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
