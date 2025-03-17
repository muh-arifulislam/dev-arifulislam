import { motion } from "framer-motion";

interface BlinkingCircleProps {
  size?: number;
  color?: string;
  duration?: number;
}

const BlinkingCircle: React.FC<BlinkingCircleProps> = () => {
  return (
    <>
      <div className="w-8 h-8 bg-green-100 flex items-center justify-center rounded-full">
        <motion.div
          className="w-3 h-3 bg-green-400 rounded-full"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        />
      </div>
    </>
  );
};

export default BlinkingCircle;
