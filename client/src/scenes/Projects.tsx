import ProjectCard from "../components/Card/ProjectCard";

const Projects = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <a
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
            href="/"
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
          </a>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">My Projects</h1>
          <p className="text-blue-600 max-w-2xl mx-auto">
            Explore my latest projects and experiments. Each project represents
            a unique challenge and solution.
          </p>
        </div>
        <div className="bg-white/80 backdrop-blue-lg rounded-3xl p-6 shadow-xl mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search projects..."
                  id="search"
                  className="w-full px-4 py-2 rounded-xl bg-white border border-blue-100 focus:border-blue-500 focus:ring-2  focus:ring-blue-200 transition-colors"
                />
              </div>
              <button className="px-4 py-2 text-blue-600 border border-blue-100 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer">
                Reset Filters
              </button>
            </div>
            <div className="flex-1">
              <p className="text-sm text-blue-600 mb-2">Filter by tags:</p>
              <div className="flex flex-wrap gap-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="Astro"
                    className="tag-checkbox hidden"
                  />
                  <span className="px-3 py-1 rounded-full border border-blue-100 text-sm cursor-pointer hover:bg-blue-50 transition-colors tag-label">
                    Astro
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="Astro"
                    className="tag-checkbox hidden"
                  />
                  <span className="px-3 py-1 rounded-full border border-blue-100 text-sm cursor-pointer hover:bg-blue-50 transition-colors tag-label">
                    Astro
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="Astro"
                    className="tag-checkbox hidden"
                  />
                  <span className="px-3 py-1 rounded-full border border-blue-100 text-sm cursor-pointer hover:bg-blue-50 transition-colors tag-label">
                    Astro
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
