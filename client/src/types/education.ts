export interface IEducation {
  _id: string;
  title: string;
  institute: string;
  address: string;
  durations: {
    from: string;
    to: string;
  };
  events: string[];
}
