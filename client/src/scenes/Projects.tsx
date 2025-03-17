import { NavLink } from "react-router";
import ProjectCard from "../components/Card/ProjectCard";
import { useProjects } from "../hooks/useProjects";
import { IProject } from "../types/project.types";

const Projects = () => {
  const { data } = useProjects();

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <NavLink
            to={"/"}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            Back to Home
          </NavLink>
          <h1 className="text-4xl font-bold text-blue-900 dark:text-white/90 mb-4">
            My Projects
          </h1>
          <p className="text-blue-600 dark:text-white/80 max-w-2xl mx-auto">
            Explore my latest projects and experiments. Each project represents
            a unique challenge and solution.
          </p>
        </div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {data?.data?.map((project: IProject) => (
              <ProjectCard key={project?._id} data={project} />
            ))}
          </div>
        </div>
        {/* <div className="bg-white/80 backdrop-blue-lg rounded-3xl p-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {data?.data?.map((project: IProject) => (
              <ProjectCard key={project?._id} data={project} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
