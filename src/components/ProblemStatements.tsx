import { useState, useEffect, useCallback } from "react";
import { Lock, Unlock, Terminal, Sparkles, X, CheckCircle2, Target, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { problemStatements as problems } from "../data/problemStatements";
import { detailedProblemStatements } from "../data/detailedProblemStatements";
import { HACKATHON_CONFIG } from "../config/hackathon";

interface Problem {
  id: number;
  category: string;
  title: string;
  description: string;
  difficulty: string;
  technologies: string[];
}

export function ProblemStatements() {

  // If showCountdown is false, skip all countdown logic and show problems directly
  const skipCountdown = !HACKATHON_CONFIG.showCountdown || HACKATHON_CONFIG.isAppUnlocked;

  // Check if already revealed from localStorage first
  const [isRevealed, setIsRevealed] = useState(() => {
    if (skipCountdown) return true;
    if (typeof window !== "undefined") {
      return localStorage.getItem("hackathon_v5_isRevealed") === "true";
    }
    return false;
  });

  const [isStarted, setIsStarted] = useState(() => {
    if (skipCountdown) return true;
    if (typeof window !== "undefined") {
      // If already revealed, consider it started too
      const revealed = localStorage.getItem("hackathon_v5_isRevealed") === "true";
      const started = localStorage.getItem("hackathon_v5_isStarted") === "true";
      return revealed || started;
    }
    return false;
  });

  const [, setClickCount] = useState(0);
  
  // If already revealed or countdown is skipped, set timeLeft to 0
  const [timeLeft, setTimeLeft] = useState(() => {
    if (skipCountdown) return 0;
    if (typeof window !== "undefined" && localStorage.getItem("hackathon_v5_isRevealed") === "true") {
      return 0;
    }
    return HACKATHON_CONFIG.countdownDuration;
  });
  
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);

  useEffect(() => {
    if (isStarted) {
      localStorage.setItem("hackathon_v5_isStarted", "true");
    }
  }, [isStarted]);

  useEffect(() => {
    if (isRevealed) {
      localStorage.setItem("hackathon_v5_isRevealed", "true");
    }
  }, [isRevealed]);

  const startCountdown = useCallback(() => {
    setClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= HACKATHON_CONFIG.clicksToUnlock) {
        setIsStarted(true);
      }
      return newCount;
    });
  }, []);

  useEffect(() => {
    // If globally unlocked, skipping countdown logic might be preferred, or let it run instantly
    if (HACKATHON_CONFIG.isAppUnlocked) {
      if (!isRevealed) setIsRevealed(true);
      return;
    }

    if (!isStarted || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRevealed(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isStarted, timeLeft, isRevealed]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return {
      minutes: mins.toString().padStart(2, "0"),
      seconds: secs.toString().padStart(2, "0"),
    };
  };

  const time = formatTime(timeLeft);

  return (
    <section id="countdown" className="relative min-h-screen py-32 px-4 flex items-center justify-center overflow-hidden bg-[#E9B7F0] text-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 cyber-grid opacity-10 mix-blend-multiply" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px] animate-pulse-glow" />
        {isRevealed && (
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20" />
        )}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
        {/* Section header */}

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-[#662768]">
          THE CHALLENGE AWAITS
        </h2>

        {!isStarted ? (
          /* Initial state - Enter button */
          <div className="space-y-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-purple-500/20 blur-xl animate-pulse-glow" />
              <button
                onClick={startCountdown}
                className="relative group px-12 py-6 bg-[#662768] border-2 border-white/20 text-white font-display text-xl font-bold tracking-wider hover:bg-[#662768]/90 transition-all duration-500 glow-box rounded-lg"
              >
                <span className="flex items-center gap-3">
                  <Lock className="w-6 h-6 group-hover:hidden" />
                  <Unlock className="w-6 h-6 hidden group-hover:block" />
                  ENTER TO UNLOCK
                </span>
              </button>
            </div>

            <p className="text-slate-900 font-mono font-medium text-sm max-w-md mx-auto">
              Click to initiate the countdown sequence and reveal the hackathon challenges.
            </p>

            {/* Decorative elements */}
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-purple-500/30 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        ) : !isRevealed ? (
          /* Countdown state */
          <div className="space-y-12">
            <div className="flex items-center justify-center gap-4 md:gap-8">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/30 blur-xl animate-countdown-tick" />
                  <div className="relative w-24 h-32 md:w-32 md:h-40 bg-gray-800 border-2 border-purple-500 flex items-center justify-center glow-box rounded-lg">
                    <span className="font-display text-5xl md:text-6xl font-black text-purple-400">
                      {time.minutes}
                    </span>
                  </div>
                </div>

                <span className="font-mono text-xs text-slate-700 font-bold mt-2 tracking-widest">MINUTES</span>
              </div>

              <div className="font-display text-4xl text-purple-600 animate-pulse">:</div>

              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-pink-500/30 blur-xl animate-countdown-tick" />
                  <div className="relative w-24 h-32 md:w-32 md:h-40 bg-gray-900 border-2 border-pink-500 flex items-center justify-center glow-magenta rounded-lg">
                    <span className="font-display text-5xl md:text-6xl font-black text-pink-400">
                      {time.seconds}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs text-slate-700 font-bold mt-2 tracking-widest">SECONDS</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-slate-700 font-bold font-mono text-sm">
              <Terminal className="w-4 h-4 text-purple-600 animate-pulse" />
              <span>Decrypting challenge data...</span>
            </div>

            {/* Loading bar */}
            <div className="max-w-md mx-auto">
              <div className="h-1 bg-gray-700 overflow-hidden rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-1000"
                  style={{ width: `${((HACKATHON_CONFIG.countdownDuration - timeLeft) / HACKATHON_CONFIG.countdownDuration) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ) : (
          /* Revealed state - Single Problem Statement Display */
          <div className="animate-scale-in space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500 text-purple-700 font-mono text-sm rounded-full">
              <Sparkles className="w-4 h-4" />
              Bi3 HACKATHON 2025 - CHALLENGE
            </div>

            {/* Single Problem Statement - Full Width Card */}
            {problems.length === 1 ? (
              <div className="max-w-5xl mx-auto">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/50 shadow-2xl">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-[#662768] to-purple-600 p-6 md:p-8 text-white">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-sm font-bold bg-white/20 px-4 py-1.5 rounded-full">
                        🚗 {problems[0].category}
                      </span>
                      <span className="text-sm font-semibold bg-white/10 px-4 py-1.5 rounded-full">
                        {problems[0].difficulty}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-display font-bold leading-tight">
                      {problems[0].title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 space-y-8 text-left">
                    {/* Overview */}
                    {detailedProblemStatements[1]?.overview && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-6 bg-[#662768] rounded-full"></div>
                          <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">Overview</h4>
                        </div>
                        <p className="text-slate-700 leading-relaxed text-base pl-4">
                          {detailedProblemStatements[1].overview}
                        </p>
                      </div>
                    )}

                    {/* Objective */}
                    {detailedProblemStatements[1]?.objective && (
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                        <div className="flex items-start gap-3">
                          <Target className="w-6 h-6 text-[#662768] flex-shrink-0 mt-1" />
                          <div className="space-y-3 w-full">
                            <h4 className="text-lg font-bold text-[#662768]">Objective</h4>
                            <p className="text-slate-700 leading-relaxed">
                              {detailedProblemStatements[1].objective}
                            </p>
                            {detailedProblemStatements[1].objectivePoints && (
                              <ul className="grid sm:grid-cols-2 gap-2 mt-3">
                                {detailedProblemStatements[1].objectivePoints.map((point, idx) => (
                                  <li key={idx} className="flex items-center gap-2 text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Core Requirements */}
                    {detailedProblemStatements[1]?.coreRequirements && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-6 bg-[#662768] rounded-full"></div>
                          <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">Core Requirements</h4>
                        </div>
                        {detailedProblemStatements[1].coreRequirements.map((req, idx) => (
                          <div key={idx} className="pl-4 space-y-3">
                            <h5 className="font-bold text-[#662768] flex items-center gap-2">
                              <Zap className="w-5 h-5" />
                              {req.title}
                            </h5>
                            <ul className="grid md:grid-cols-2 gap-2 ml-7">
                              {req.points.map((point, pidx) => (
                                <li key={pidx} className="flex items-start gap-2 text-slate-700">
                                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Use Cases */}
                    {detailedProblemStatements[1]?.useCases && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-6 bg-[#662768] rounded-full"></div>
                          <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">Sample Use Cases</h4>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pl-4">
                          {detailedProblemStatements[1].useCases.map((useCase, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                              <h5 className="font-bold text-[#662768] mb-2 flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#662768] rounded-full"></div>
                                {useCase.title}
                              </h5>
                              <p className="text-sm text-slate-600 leading-relaxed">{useCase.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Metrics */}
                    {detailedProblemStatements[1]?.metrics && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-6 bg-[#662768] rounded-full"></div>
                          <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">✅ Evaluation Metrics</h4>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                          <ul className="grid md:grid-cols-2 gap-3">
                            {detailedProblemStatements[1].metrics.map((metric, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{metric}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="space-y-4 pt-4 border-t border-slate-200">
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Recommended Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {problems[0].technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-sm bg-[#662768] text-white px-4 py-2 rounded-lg shadow-sm font-medium hover:bg-[#662768]/90 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Fallback Grid for multiple problems */
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {problems.map((problem) => (
                  <div
                    key={problem.id}
                    className="bg-white/60 backdrop-blur-md rounded-xl overflow-hidden border border-white/40 hover:border-white/60 transition-all hover:transform hover:scale-105 shadow-xl group"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-[#662768] bg-white/60 px-3 py-1 rounded-full">
                          {problem.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-[#662768]">{problem.title}</h3>
                      <p className="text-slate-700 text-sm mb-4 leading-relaxed font-medium line-clamp-3">{problem.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {problem.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-white/50 text-[#662768] px-2 py-1 rounded border border-[#662768]/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedProblem(problem as Problem)}
                        className="w-full border-white/20 bg-white text-[#662768] hover:bg-white/90 hover:text-[#662768] transition-colors font-bold"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedProblem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-white/95 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl my-8 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedProblem(null)}
              className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-900 transition-colors z-10 bg-white rounded-full shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 md:p-8 space-y-6 text-left max-h-[85vh] overflow-y-auto">
              {/* Header */}
              <div className="space-y-4 pb-6 border-b border-slate-200">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-bold text-[#662768] bg-[#662768]/10 px-4 py-1.5 rounded-full">
                    {selectedProblem.category}
                  </span>
                  <span className="text-sm font-semibold text-slate-600 bg-slate-100 px-4 py-1.5 rounded-full">
                    {selectedProblem.difficulty}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-bold text-[#662768] leading-tight">
                  {selectedProblem.title}
                </h3>
              </div>

              {/* Check if detailed content exists */}
              {detailedProblemStatements[selectedProblem.id] ? (
                <div className="space-y-8">
                  {/* Overview */}
                  {detailedProblemStatements[selectedProblem.id].overview && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-6 bg-[#662768] rounded-full"></div>
                        <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">Overview</h4>
                      </div>
                      <p className="text-slate-700 leading-relaxed text-base pl-4">
                        {detailedProblemStatements[selectedProblem.id].overview}
                      </p>
                    </div>
                  )}

                  {/* Objective */}
                  {detailedProblemStatements[selectedProblem.id].objective && (
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                      <div className="flex items-start gap-3">
                        <Target className="w-6 h-6 text-[#662768] flex-shrink-0 mt-1" />
                        <div className="space-y-2">
                          <h4 className="text-lg font-bold text-[#662768]">Objective</h4>
                          <p className="text-slate-700 leading-relaxed">
                            {detailedProblemStatements[selectedProblem.id].objective}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Core Requirements */}
                  {detailedProblemStatements[selectedProblem.id].coreRequirements && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-6 bg-[#662768] rounded-full"></div>
                        <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">Core Requirements</h4>
                      </div>
                      {detailedProblemStatements[selectedProblem.id].coreRequirements!.map((req, idx) => (
                        <div key={idx} className="pl-4 space-y-3">
                          <h5 className="font-bold text-[#662768] flex items-center gap-2">
                            <Zap className="w-5 h-5" />
                            {req.title}
                          </h5>
                          <ul className="space-y-2 ml-7">
                            {req.points.map((point, pidx) => (
                              <li key={pidx} className="flex items-start gap-2 text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Use Cases */}
                  {detailedProblemStatements[selectedProblem.id].useCases && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-6 bg-[#662768] rounded-full"></div>
                        <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">Sample Use Cases</h4>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 pl-4">
                        {detailedProblemStatements[selectedProblem.id].useCases!.map((useCase, idx) => (
                          <div key={idx} className="bg-white border border-slate-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                            <h5 className="font-bold text-[#662768] mb-2 flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#662768] rounded-full"></div>
                              {useCase.title}
                            </h5>
                            <p className="text-sm text-slate-600 leading-relaxed">{useCase.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Metrics */}
                  {detailedProblemStatements[selectedProblem.id].metrics && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-6 bg-[#662768] rounded-full"></div>
                        <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">Evaluation Metrics</h4>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <ul className="grid md:grid-cols-2 gap-3">
                          {detailedProblemStatements[selectedProblem.id].metrics!.map((metric, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{metric}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="space-y-4 pt-4 border-t border-slate-200">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Recommended Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProblem.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-sm bg-[#662768] text-white px-4 py-2 rounded-lg shadow-sm font-medium hover:bg-[#662768]/90 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Simple view for other problem statements */
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Description</h4>
                    <p className="text-slate-700 leading-relaxed font-medium text-base">
                      {selectedProblem.description}
                    </p>
                  </div>

                  <div className="space-y-4 border-t border-slate-200 pt-4">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Recommended Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProblem.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-sm bg-[#662768] text-white px-3 py-1.5 rounded-md shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Close Button */}
              <div className="pt-6 flex justify-end border-t border-slate-200">
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedProblem(null)}
                  className="px-6 py-2 border-[#662768] text-[#662768] hover:bg-[#662768] hover:text-white font-semibold"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Decorative corners */}

    </section>
  );
}
