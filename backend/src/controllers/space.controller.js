import {
  createSpace,
  getAllSpaces,
  getSpaceById,
  updateSpace,
  deleteSpace,
} from '../services/space.service.js';

const createSpaceController = async (req, res) => {
  try {
    const space = await createSpace(req.body);

    res.status(201).json({
      success: true,
      message: 'Space created successfully',
      data: space,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create space',
      error: error.message,
    });
  }
};

const getAllSpacesController = async (req, res) => {
  try {
    const spaces = await getAllSpaces();

    res.status(200).json({
      success: true,
      data: spaces,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch spaces',
      error: error.message,
    });
  }
};

const getSpaceByIdController = async (req, res) => {
  try {
    const space = await getSpaceById(req.params.id);

    if (!space) {
      return res.status(404).json({
        success: false,
        message: 'Space not found',
      });
    }

    res.status(200).json({
      success: true,
      data: space,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch space',
      error: error.message,
    });
  }
};

const updateSpaceController = async (req, res) => {
  try {
    const space = await updateSpace(req.params.id, req.body);

    if (!space) {
      return res.status(404).json({
        success: false,
        message: 'Space not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Space updated successfully',
      data: space,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update space',
      error: error.message,
    });
  }
};

const deleteSpaceController = async (req, res) => {
  try {
    const space = await deleteSpace(req.params.id);

    if (!space) {
      return res.status(404).json({
        success: false,
        message: 'Space not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Space deleted successfully',
      data: space,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete space',
      error: error.message,
    });
  }
};

export {
  createSpaceController,
  getAllSpacesController,
  getSpaceByIdController,
  updateSpaceController,
  deleteSpaceController,
};
