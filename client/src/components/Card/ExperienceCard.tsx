import DurationButton from "../ui/DurationButton";
import TechButton from "../ui/TechButton";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ExperienceCard = ({ data }: { data: any }) => {
  return (
    <div className="border-l-2 border-blue-500 pl-4 pb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
        <div>
          <h4 className="text-xl font-medium text-gray-700 dark:text-white/80">
            {data?.title}
          </h4>
          <p className="text-gray-500 dark:text-white/60">
            {data?.institute} {data?.address}
          </p>
        </div>
        <DurationButton from={data?.durations?.from} to={data?.durations?.to} />
      </div>
      <ul className="list-disc list-inside text-gray-600 dark:text-white/50 mb-3 space-y-1">
        {data?.events?.map((event: string) => (
          <li key={event}>{event}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {data?.tech?.map((tech: string) => (
          <TechButton tech={tech} key={tech} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
