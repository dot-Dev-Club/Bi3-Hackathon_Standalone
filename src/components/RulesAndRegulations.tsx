export function RulesAndRegulations() {
  const rules = [
    {
      title: "Team Composition",
      description: "Teams must consist of 2-4 members. Solo participants will be helped to find teammates during the team formation session."
    },
    {
      title: "Original Work",
      description: "All code must be written during the hackathon. Pre-existing code, templates, or projects are not allowed. Open-source libraries and APIs are permitted."
    },
    {
      title: "Submission Deadline",
      description: "All projects must be submitted before the deadline. Late submissions will not be accepted under any circumstances."
    },
    {
      title: "Code of Conduct",
      description: "All participants must adhere to our code of conduct. Harassment, discrimination, or inappropriate behavior will result in immediate disqualification."
    },
    {
      title: "Intellectual Property",
      description: "Teams retain full ownership of their projects. However, by participating, you grant us permission to showcase your work."
    },
    {
      title: "Judging Criteria",
      description: "Projects will be judged on innovation, technical complexity, design, practicality, and presentation quality."
    },
    {
      title: "Communication",
      description: "All official communication will be through Discord and email. Ensure you join the official channels after registration."
    },
    {
      title: "Mentorship",
      description: "Mentors are available to guide, not to code. They can provide advice, debug help, and direction but cannot write code for your team."
    }
  ];

  return (
    <section id="rules" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Rules & Regulations
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Please read and understand all rules before participating. Violation of any rule may lead to disqualification.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {rules.map((rule, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-300">{rule.title}</h3>
                  <p className="text-gray-400">{rule.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
