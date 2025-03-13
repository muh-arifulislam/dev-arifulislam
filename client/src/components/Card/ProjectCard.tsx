const ProjectCard = () => {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=400&fit=crop"
          alt="AI Chat Application"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          Featured
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">
          AI Chat Application
        </h3>
        <p className="text-blue-600 mb-4 line-clamp-2">
          Real-time chat application with AI-powered responses. Utilizes
          OpenAI's GPT for intelligent conversations and features a modern,
          intuitive interface.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {["React", "Node.js", "OpenAI", "WebSocket"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href="https://chat.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/example/ai-chat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-colors"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
