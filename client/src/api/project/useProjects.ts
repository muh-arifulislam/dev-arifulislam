import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProjects = async () => {
  const { data } = await axios.get(
    "https://dev-arifulislam.vercel.app/api/v1/projects"
  );
  return data;
};

const fetchFeaturedProjects = async () => {
  const { data } = await axios.get(
    "https://dev-arifulislam.vercel.app/api/v1/projects/featured"
  );
  // Assuming featured projects are filtered from all projects
  return data;
};

export const useProjects = () => {
  const projectsQuery = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const featuredProjectsQuery = useQuery({
    queryKey: ["featuredProjects"],
    queryFn: fetchFeaturedProjects,
  });

  return {
    projects: projectsQuery,
    featuredProjects: featuredProjectsQuery,
  };
};
