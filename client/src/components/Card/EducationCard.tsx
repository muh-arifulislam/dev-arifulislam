interface PropsType {
  data: {
    _id: string;
    title: string;
    institute: string;
    address: string;
    durations: {
      from: string;
      to: string;
    };
    events: string[];
  };
}

const EducationCard: React.FC<PropsType> = ({ data }) => {
  return (
    <div className="border-l-2 border-blue-500 pl-4 pb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
        <div>
          <h4 className="text-xl font-medium text-gray-700">{data?.title}</h4>
          <p className="text-gray-500">
            {data?.institute}, {data?.address}
          </p>
        </div>
        <span className="text-sm text-gray-400 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
          {data?.durations?.from} - {data?.durations?.to}
        </span>
      </div>
      <ul className="list-disc list-inside text-gray-600 mb-3 space-y-1">
        {data?.events?.map((event, idx) => (
          <li key={idx}>{event}</li>
        ))}
      </ul>
    </div>
  );
};

export default EducationCard;
