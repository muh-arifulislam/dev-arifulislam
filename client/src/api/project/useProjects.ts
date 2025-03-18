import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProjects = async () => {
  const { data } = await axios.get(
    "https://dev-arifulislam.vercel.app/api/v1/projects"
  );
  return data;
};

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
};
