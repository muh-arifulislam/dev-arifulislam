import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProjects = async () => {
  const { data } = await axios.get("http://localhost:5000/api/v1/projects");
  return data;
};

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
};
