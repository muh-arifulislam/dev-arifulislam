import { Document } from 'mongoose';

export interface IAdditionalMedium {
  url: string;
  title: string;
  description?: string;
  thumbnail?: string;
  order: number; // Maintains the order of links
}

export interface IProjectDuration {
  from: string;
  to: string;
}

export interface IProject extends Document {
  title: string;
  description: string;
  techStack: string[];
  image?: string;
  category: string;
  additionalMedia: IAdditionalMedium[];
  projectDuration: IProjectDuration;
}
