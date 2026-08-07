const API_URL = import.meta.env.VITE_API_URL;

export const getSpaces = async () => {
  const response = await fetch(`${API_URL}/spaces`);

  if (!response.ok) {
    throw new Error('Failed to fetch spaces');
  }

  const result = await response.json();

  return result.data;
};

export const getSpaceById = async (id) => {
  const response = await fetch(`${API_URL}/spaces/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch space');
  }

  const result = await response.json();

  return result.data;
};
