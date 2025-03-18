interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
  rounded?: string;
}

const SkeletonLoader: React.FC<SkeletonProps> = ({
  width = "w-full",
  height = "h-4",
  rounded = "rounded-md",
  className = "",
}) => {
  return (
    <div
      className={`bg-gray-300 dark:bg-gray-700 animate-pulse ${width} ${height} ${rounded} ${className}`}
    ></div>
  );
};

export default SkeletonLoader;
