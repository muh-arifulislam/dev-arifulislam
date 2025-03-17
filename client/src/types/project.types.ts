export interface IAdditionalMedium {
  _id: string;
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

export interface IProject {
  _id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  liveUrlAdditional?: string;
  image?: string;
  category: string;
  additionalMedia: IAdditionalMedium[];
  projectDuration: IProjectDuration;
  createdAt: string;
  updatedAt: string;
}
