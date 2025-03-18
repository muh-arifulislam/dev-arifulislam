export interface IBlog {
  _id: string;
  title: string;
  subtitle: string;
  summary: string;
  category: string;
  featuredImage: string;
  mainContent: string;
  user: string;
  comments: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
