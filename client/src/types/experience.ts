export interface IExperience {
  _id: string;
  title: string;
  institute: string;
  address: string;
  durations: {
    from: string;
    to: string;
  };
  events: string[];
  tech?: string[];
}
