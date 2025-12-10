import { Button } from "./ui/button";

export function ProblemStatements() {
  const problems = [
    {
      id: 1,
      category: "Healthcare",
      title: "AI-Powered Health Assistant",
      description: "Build an intelligent health assistant that can help users track symptoms, provide preliminary health insights, and connect them with healthcare providers.",
      difficulty: "Advanced",
      technologies: ["AI/ML", "NLP", "Mobile/Web"]
    },
    {
      id: 2,
      category: "Education",
      title: "Personalized Learning Platform",
      description: "Create a platform that adapts to individual learning styles and paces, making education more accessible and effective for all students.",
      difficulty: "Intermediate",
      technologies: ["EdTech", "Data Analytics", "UI/UX"]
    },
    {
      id: 3,
      category: "Sustainability",
      title: "Carbon Footprint Tracker",
      description: "Develop an application that helps individuals and businesses track, analyze, and reduce their carbon footprint through actionable insights.",
      difficulty: "Beginner",
      technologies: ["IoT", "Data Visualization", "Mobile"]
    },
    {
      id: 4,
      category: "FinTech",
      title: "Financial Literacy for Youth",
      description: "Design a gamified platform that teaches young people about personal finance, budgeting, saving, and investing in an engaging way.",
      difficulty: "Intermediate",
      technologies: ["Gamification", "Web/Mobile", "Data"]
    },
    {
      id: 5,
      category: "Social Impact",
      title: "Community Resource Connector",
      description: "Build a platform that connects people in need with local community resources, volunteers, and support services efficiently.",
      difficulty: "Beginner",
      technologies: ["Geolocation", "Database", "Web/Mobile"]
    },
    {
      id: 6,
      category: "Open Innovation",
      title: "Wildcard - Your Idea",
      description: "Have a unique problem you want to solve? Pitch your own innovative idea that can make a positive impact on society.",
      difficulty: "Any",
      technologies: ["Your Choice"]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500";
      case "Intermediate": return "bg-yellow-500";
      case "Advanced": return "bg-red-500";
      default: return "bg-purple-500";
    }
  };

  return (
    <section id="problems" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Problem Statements
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Choose from one of the following problem statements or bring your own innovative idea. 
          Each track offers unique challenges and opportunities.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div 
              key={problem.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all hover:transform hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                    {problem.category}
                  </span>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${getDifficultyColor(problem.difficulty)} text-white`}>
                    {problem.difficulty}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{problem.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {problem.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
