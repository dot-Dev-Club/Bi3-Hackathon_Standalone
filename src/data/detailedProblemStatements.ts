export interface DetailedProblemStatement {
    id: number;
    overview?: string;
    objective?: string;
    objectivePoints?: string[];
    coreRequirements?: {
        title: string;
        points: string[];
    }[];
    useCases?: {
        title: string;
        description: string;
    }[];
    metrics?: string[];
}

export const detailedProblemStatements: Record<number, DetailedProblemStatement> = {
    1: {
        id: 1,
        overview: "Many toll plazas, parking lots, gated communities, and traffic checkpoints rely on camera surveillance but lack automated intelligence to understand real-time traffic flow, queue length, vehicle types, or waiting time. Manual monitoring leads to delays, poor planning, and inefficient operations. Your challenge is to build an AI-powered camera analytics solution that can detect, classify, track, and analyze vehicles using a camera feed—either live or recorded. The system should compute key metrics like wait time, traffic flow, and occupancy and present them through a user-friendly dashboard.",
        objective: "Create a smart application that uses camera-based vehicle analytics to automatically:",
        objectivePoints: [
            "Detect vehicles",
            "Identify vehicle type",
            "Track each vehicle",
            "Measure wait time (dwell time)",
            "Display insights in a clean dashboard",
            "(Optional) Forecast future traffic patterns"
        ],
        coreRequirements: [
            {
                title: "Camera-Based Vehicle Intelligence",
                points: [
                    "Detect vehicles appearing in the camera feed",
                    "Identify the type of each vehicle (car, bike, truck, bus, auto, etc.)",
                    "Support live video streams or stored video files as input",
                    "Track each vehicle from entry to exit within the frame",
                    "Calculate total time spent by each vehicle in the camera zone",
                    "Handle multiple vehicles at the same time with stable IDs",
                    "Find a way to present the data to Business"
                ]
            }
        ],
        useCases: [
            {
                title: "Toll Gate Monitoring",
                description: "Track how long each vehicle waits in queue, identify congestion times, and classify vehicle types passing through."
            },
            {
                title: "Parking Lot Traffic Monitoring",
                description: "Measure occupancy, track vehicle movement in/out, identify peak hours, and monitor parking zone utilization."
            },
            {
                title: "Custom Use Case",
                description: "No need to stick to only above use cases. Feel free to choose your own innovative application."
            }
        ],
        metrics: [
            "Vehicle detection accuracy – how well the system detects vehicles in the camera feed",
            "Vehicle type accuracy – how correctly it identifies vehicle types (car, bike, truck, etc.)",
            "Wait time accuracy – how accurately the system calculates how long each vehicle stays in view",
            "Overall system accuracy – combined performance of detection, tracking, and timing",
            "Report & dashboard quality – how clearly the data is shown to users or business teams",
            "Tracking stability – how well the system keeps the same ID for each vehicle",
            "Real-time performance – how smoothly the system works with live or recorded video",
            "UI/UX quality – how simple, clean, and easy-to-use the dashboard is",
            "Scalability & reliability – how well the system handles heavy traffic or long videos",
            "Innovation – any smart or creative features beyond the basic requirements",
            "ML forecasting (optional) – how well the system predicts future traffic or wait times",
            "Presentation skills – clarity and effectiveness of the final demo"
        ]
    }
};
