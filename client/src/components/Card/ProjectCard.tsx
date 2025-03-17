import { IProject } from "../../types/project.types";

interface PropsType {
  data: IProject;
}

// bg-gradient-to-br from-blue-50 to-white

const ProjectCard: React.FC<PropsType> = ({ data }) => {
  return (
    <div className="border border-slate-200 dark:border-slate-200/10 bg-gradient-to-br from-blue-50 to-white dark:from-[#1f1f1f] dark:to-[#1f1f1f] p-4 sm:p-6 rounded-2xl flex flex-col justify-between gap-y-4">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-blue-900 dark:text-blue-400">
            {data?.title}
          </h2>
          <h4 className="text-slate-500 dark:text-slate-200/50 text-sm">
            Nov 2024 - Feb 2025
          </h4>
        </div>
        <div>
          <p className="text-slate-600 dark:text-slate-200">
            {data?.description}
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {data?.techStack?.map((tech, idx) => (
            <span
              key={idx * Math.random()}
              className="px-3 py-1 bg-blue-100 dark:bg-gray-50/10 text-blue-600 dark:text-white/80 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-6">
          {data?.additionalMedia?.map((item) => (
            <a
              key={item?._id}
              href={item.url}
              target="_blank"
              className="flex items-center text-blue-600 dark:text-white/90 hover:underline font-medium"
            >
              {item?.title}
              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
