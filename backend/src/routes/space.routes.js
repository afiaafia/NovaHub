import express from 'express';

import {
  createSpaceController,
  getAllSpacesController,
  getSpaceByIdController,
  updateSpaceController,
  deleteSpaceController,
} from '../controllers/space.controller.js';

const router = express.Router();

router.post('/', createSpaceController);

router.get('/', getAllSpacesController);

router.get('/:id', getSpaceByIdController);

router.patch('/:id', updateSpaceController);

router.delete('/:id', deleteSpaceController);

export default router;
