// getSpaces();
// getSpace(id);
// createSpace(data);
// updateSpace(id, data);
// deleteSpace(id);

const API_URL = import.meta.env.VITE_API_URL;

// Get all spaces
export const getSpaces = async () => {
  const response = await fetch(`${API_URL}/spaces`);

  if (!response.ok) {
    throw new Error('Failed to fetch spaces');
  }

  return response.json();
};

// Get single space
export const getSpace = async (id) => {
  const response = await fetch(`${API_URL}/spaces/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch space');
  }

  return response.json();
};

// Create space
export const createSpace = async (spaceData) => {
  const response = await fetch(`${API_URL}/spaces`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(spaceData),
  });

  if (!response.ok) {
    throw new Error('Failed to create space');
  }

  return response.json();
};

// Update space
export const updateSpace = async (id, spaceData) => {
  const response = await fetch(`${API_URL}/spaces/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(spaceData),
  });

  if (!response.ok) {
    throw new Error('Failed to update space');
  }

  return response.json();
};

// Delete space
export const deleteSpace = async (id) => {
  const response = await fetch(`${API_URL}/spaces/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete space');
  }

  return response.json();
};
