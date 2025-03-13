const ExperienceCard = () => {
  return (
    <div className="border-l-2 border-blue-500 pl-4 pb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
        <div>
          <h4 className="text-xl font-medium text-gray-700">
            Senior Software Engineer
          </h4>
          <p className="text-gray-500">Tech Solutions Inc.</p>
        </div>
        <span className="text-sm text-gray-400 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
          2021 - Present
        </span>
      </div>
      <ul className="list-disc list-inside text-gray-600 mb-3 space-y-1">
        <li>
          Led development of cloud-native applications using microservices
          architecture
        </li>
        <li>Mentored junior developers and conducted code reviews</li>
        <li>Improved system performance by 40% through optimization</li>
      </ul>
      <div className="flex flex-wrap gap-2">
        {["React", "Node.js", "AWS", "Docker"].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
