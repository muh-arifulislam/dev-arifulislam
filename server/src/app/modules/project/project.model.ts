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
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    order: {
      type: Number,
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
    },
    to: {
      type: String,
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
    },
    description: {
      type: String,
    },
    techStack: [
      {
        type: String,
      },
    ],
    category: {
      type: String,
    },
    liveUrl: {
      type: String,
    },
    liveUrlAdditional: {
      type: String,
    },
    image: {
      type: String,
    },
    additionalMedia: [additionalMediumSchema],
    projectDuration: projectDurationSchema,
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const Project = model<IProject>('Project', projectSchema);
