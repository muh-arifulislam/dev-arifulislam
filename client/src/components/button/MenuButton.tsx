import { motion, Transition, SVGMotionProps } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

interface Props extends SVGMotionProps<SVGSVGElement> {
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
  transition?: Transition;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  lineProps?: Record<string, any>;
}

const MenuButton = ({
  isOpen = false,
  width = 24,
  height = 16,
  strokeWidth = 2,
  transition = {}, // Defaulted to an empty object instead of `null`
  lineProps = {}, // Defaulted to an empty object instead of `null`
  ...props
}: Props) => {
  const { theme } = useTheme();
  const variant = isOpen ? "opened" : "closed";

  const top = {
    closed: { rotate: 0, translateY: 0 },
    opened: { rotate: 45, translateY: 2 },
  };

  const center = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };

  const bottom = {
    closed: { rotate: 0, translateY: 0 },
    opened: { rotate: -45, translateY: -2 },
  };

  const mergedLineProps = {
    stroke: theme === "light" ? "#181818" : "#fbf9fa",
    strokeWidth: strokeWidth as number,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps,
  };

  const unitHeight = 4;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      {...props}
    >
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={top}
        {...mergedLineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...mergedLineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={bottom}
        {...mergedLineProps}
      />
    </motion.svg>
  );
};

export { MenuButton };
