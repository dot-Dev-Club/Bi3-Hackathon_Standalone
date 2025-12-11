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
        category: "Smart Cities & Transportation",
        title: "Intelligent Vehicle Flow & Wait-Time Analyzer",
        description: "Build an AI-powered camera analytics solution that can detect, classify, track, and analyze vehicles using a camera feed—either live or recorded. The system should compute key metrics like wait time, traffic flow, and occupancy and present them through a user-friendly dashboard.",
        difficulty: "Advanced",
        technologies: ["Computer Vision", "AI/ML", "Object Detection", "Video Analytics", "Dashboard"]
    }
];
