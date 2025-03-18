import { NavLink } from "react-router";

const BlogCard = () => {
  return (
    <article className="group border border-slate-200 dark:border-slate-200/10 rounded-2xl dark:bg-[#1f1f1f]">
      <NavLink
        to="/"
        className="block p-4 rounded-2xl hover:bg-blue-50/50 dark:hover:bg-transparent transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
          <span className="px-3 py-1 bg-blue-100 dark:bg-gray-50/10 text-blue-600 dark:text-white/80 rounded-full text-sm">
            Development
          </span>
          <div className="flex items-center gap-2 text-sm text-blue-400 dark:text-white/60">
            <span>2024-05-15</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>
        <h4 className="text-lg font-medium text-blue-900 dark:text-blue-400 mb-2 group-hover:text-blue-600 transition-colors">
          Building Scalable Web Application
        </h4>
        <p className="text-blue-600/80 dark:text-white/90 text-sm line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          officiis...
        </p>
      </NavLink>
    </article>
  );
};

export default BlogCard;
