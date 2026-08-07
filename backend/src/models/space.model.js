import mongoose from 'mongoose';

const spaceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
      default: '',
    },

    icon: {
      type: String,
      default: '🚀',
    },

    color: {
      type: String,
      default: '#6366f1',
    },
  },
  {
    timestamps: true,
  }
);

const Space = mongoose.model('Space', spaceSchema);

export default Space;
