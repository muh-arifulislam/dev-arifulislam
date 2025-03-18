interface PropsType {
  tech: string;
}

const TechButton: React.FC<PropsType> = ({ tech }) => {
  return (
    <span className="px-3 py-1 bg-blue-50 dark:bg-gray-50/10 text-blue-600 dark:text-white/80 rounded-full text-sm">
      {tech}
    </span>
  );
};

export default TechButton;
