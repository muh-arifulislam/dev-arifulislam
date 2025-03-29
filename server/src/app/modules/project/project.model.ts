import { model, Schema } from 'mongoose';
import {
  IAdditionalMedium,
  IProject,
  IProjectDuration,
} from './project.interface';

const additionalMediumSchema = new Schema<IAdditionalMedium>(
  {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
    thumbnail: {
      type: String,
      default: null,
    },
    order: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

const projectDurationSchema = new Schema<IProjectDuration>(
  {
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    _id: false,
  },
);

const projectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    techStack: [
      {
        type: String,
      },
    ],
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    additionalMedia: [
      {
        type: additionalMediumSchema,
        required: true,
      },
    ],
    projectDuration: {
      type: projectDurationSchema,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const Project = model<IProject>('Project', projectSchema);
