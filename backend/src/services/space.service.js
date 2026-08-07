import Space from '../models/space.model.js';

const createSpace = async (spaceData) => {
  const space = await Space.create(spaceData);

  return space;
};

const getAllSpaces = async () => {
  const spaces = await Space.find().sort({ createdAt: -1 });

  return spaces;
};

const getSpaceById = async (id) => {
  const space = await Space.findById(id);

  return space;
};

const updateSpace = async (id, updateData) => {
  const space = await Space.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });

  return space;
};

const deleteSpace = async (id) => {
  const space = await Space.findByIdAndDelete(id);

  return space;
};

export { createSpace, getAllSpaces, getSpaceById, updateSpace, deleteSpace };
