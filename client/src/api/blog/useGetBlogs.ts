import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchBlogs = async () => {
  const { data } = await axios.get(
    "https://dev-arifulislam.vercel.app/api/v1/blogs"
  );
  return data;
};

export const useGetBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });
};

// http://localhost:5000/api/v1/blogs
