import { motion } from "framer-motion";

const ScrollDownButton = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center justify-center py-10">
      <motion.button
        onClick={handleScroll}
        className="transform p-4 bg-gray-800 text-white rounded-full shadow-lg"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.2,
          ease: "easeInOut",
        }}
      >
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M25 32.4l-9.7-9.7 1.4-1.4 8.3 8.3 8.3-8.3 1.4 1.4z" />
        </svg>
      </motion.button>
    </div>
  );
};

export default ScrollDownButton;
