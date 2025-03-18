import { useEffect, useState } from "react";

const LocalTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  return (
    <p className="font-medium dark:text-white/80">
      {time.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })}{" "}
      <span> UTC+6</span>
    </p>
  );
};

export default LocalTime;
