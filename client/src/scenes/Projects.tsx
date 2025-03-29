import { NavLink } from "react-router";
import ProjectCard from "../components/card/ProjectCard";
import { IProject } from "../types/project";
import ProjectSkeleton from "../components/skeleton/ProjectSkeleton";
import NoData from "../components/ui/NoData";
import { useProjects } from "../api/project/useProjects";
import SEO from "../components/SEO";
import config from "../utils/config";

const Projects = () => {
  const { data, isLoading } = useProjects();
  console.log(data?.data);
  return (
    <>
      <SEO
        title={`Projects - ${config.siteTitle}`}
        description="Explore my portfolio of web development projects, including e-commerce, social media apps, and innovative web tools."
        keywords="Web Development Projects, Full-Stack Projects, React, Node.js, Next.js, TypeScript, MERN, Portfolio"
        ogTitle="Projects - Arif's Portfolio"
        ogDescription="Discover my latest projects in web development, built using modern technologies like React, Next.js, and Node.js."
        ogUrl={`${config.siteUrl}projects`}
      />

      <div className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
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
          </div>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {isLoading && (
                <>
                  <ProjectSkeleton />
                  <ProjectSkeleton />
                  <ProjectSkeleton />
                  <ProjectSkeleton />
                </>
              )}

              {data?.data?.map((project: IProject) => (
                <ProjectCard key={project?._id} data={project} />
              ))}
            </div>
          </div>
          {data?.data?.length === 0 && <NoData />}
        </div>
      </div>
    </>
  );
};

export default Projects;
