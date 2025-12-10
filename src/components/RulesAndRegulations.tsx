import { getReadableTextColor } from "../lib/utils";

export function RulesAndRegulations() {
  const bgColor = '#E9B7F0';
  const textColor = getReadableTextColor(bgColor);
  const rules = [
    {
      icon: "👤",
      title: "Eligibility",
      color: "from-purple-500 to-pink-600",
      items: [
        "Participants are expected to bring their own laptops, chargers, and necessary tools."
      ],
      footer: ""
    },
    {
      icon: "🛡️",
      title: "Code of Conduct",
      color: "from-purple-500 to-pink-600",
      items: [
        "Participants must adhere to ethical practices throughout the hackathon.",
        "Plagiarism is strictly prohibited. Projects should be original, and any use of existing code must be properly attributed.",
        "Respectful behavior is expected at all times. Misconduct, harassment, or disrespect towards peers, mentors, or organizers will lead to disqualification."
      ],
      footer: ""
    },
    {
      icon: "⚙️",
      title: "Hackathon Process",
      color: "from-purple-500 to-pink-600",
      items: [
        "Mentors available for guidance throughout.",
        "Code must be committed to GitHub with documentation.",
        "Regular checkpoints will monitor progress.",
        "PPT presentations are required for all teams."
      ],
      footer: ""
    },
    {
      icon: "🏆",
      title: "Judging Criteria",
      color: "from-purple-500 to-pink-600",
      description: "Projects evaluated on:",
      items: [
        "Innovation & Creativity",
        "Relevance & Impact",
        "Technical Implementation",
        "User Experience & Design",
        "Presentation Quality",
        "Overall Feasibility"
      ],
      footer: ""
    },
    {
      icon: "📜",
      title: "Intellectual Property",
      color: "from-purple-500 to-pink-600",
      items: [
        "All code developed during the hackathon belongs to the team that created it.",
        "Organizers may showcase the projects for promotional purposes (with due credit).",
        "Any use of third-party APIs, frameworks, or libraries must comply with their respective licenses."
      ],
      footer: ""
    },
    {
      icon: "🎖️",
      title: "Prizes & Recognition",
      color: "from-purple-500 to-pink-600",
      items: [
        "Winners will be announced at the closing ceremony after the final evaluation.",
        "Organizers reserve the right to withhold a prize in case of any violation of rules."
      ],
      footer: ""
    },
    {
      icon: "⚠️",
      title: "Disqualification Grounds",
      color: "from-purple-500 to-pink-600",
      description: "A team may be disqualified if:",
      items: [
        "They plagiarize or copy an existing solution without attribution.",
        "They engage in unfair practices such as sabotage or tampering.",
        "They fail to comply with submission deadlines.",
        "They violate the code of conduct."
      ],
      footer: ""
    },
    {
      icon: "⚖️",
      title: "Organizers' Rights",
      color: "from-purple-500 to-pink-600",
      items: [
        "The BI3 BYTE BEATS team reserves the right to modify rules, schedules, or judging criteria if necessary.",
        "The decision of the judges will be final and binding."
      ],
      footer: ""
    }
  ];

  return (
    <section
      id="rules"
      className="py-20"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500">
            RULES
          </span>
          {" "}
          <span style={{ color: textColor }}>&</span>
          {" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500">
            REGULATIONS
          </span>
        </h2>
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent mx-auto my-4" />
        <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: textColor }}>
          BI3 BYTE BEATS Hackathon Guidelines - Please read carefully to ensure a fair and competitive environment
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden"
            >
              <div className="rounded-2xl p-6 h-full bg-white/60 backdrop-blur-md border border-white/40 shadow-xl hover:bg-white/70 hover:border-white/60 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${rule.color} text-white shrink-0 shadow-md`}>
                    <span className="text-lg">{rule.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3" style={{ color: '#662768' }}>{rule.title}</h3>
                    {rule.description && (
                      <p className="text-sm mb-2" style={{ color: '#662768', opacity: 0.85 }}>{rule.description}</p>
                    )}
                    <ul className="space-y-2">
                      {rule.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#662768' }}>
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${rule.color} shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {rule.footer && rule.footer.trim() !== '' && (
                      <p className="mt-3 font-semibold text-sm" style={{ color: '#662768' }}>{rule.footer}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}