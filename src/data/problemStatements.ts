export interface ProblemStatement {
    id: number;
    category: string;
    title: string;
    description: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced" | "Any";
    technologies: string[];
}

export const problemStatements: ProblemStatement[] = [
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
