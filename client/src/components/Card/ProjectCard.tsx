import { FiExternalLink } from "react-icons/fi";
import { IProject } from "../../types/project";

interface PropsType {
  data: IProject;
}

// bg-gradient-to-br from-blue-50 to-white

const ProjectCard: React.FC<PropsType> = ({ data }) => {
  return (
    <div className="border border-slate-200 dark:border-slate-200/10 bg-gradient-to-br from-blue-50 to-white dark:from-[#1f1f1f] dark:to-[#1f1f1f] p-4 sm:p-6 rounded-2xl flex flex-col justify-between gap-y-4">
      <div>
        <div className="flex items-center justify-between mb-6 gap-2">
          <h2 className="text-md sm:text-lg font-bold text-blue-900 dark:text-blue-400">
            {data?.title}
          </h2>
          <h4 className="text-slate-500 dark:text-slate-200/50 text-sm">
            {data?.projectDuration?.from} - {data?.projectDuration?.to}
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
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {data?.additionalMedia?.map((item) => (
            <a
              key={item?._id}
              href={item.url}
              target="_blank"
              className="flex items-center text-blue-600 dark:text-white/90 hover:underline font-medium"
            >
              {item?.title}
              <FiExternalLink className="text-sm ml-2" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
