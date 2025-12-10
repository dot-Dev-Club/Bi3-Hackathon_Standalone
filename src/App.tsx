import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { RulesAndRegulations } from "@/components/RulesAndRegulations";
import { ProblemStatements } from "@/components/ProblemStatements";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <ProblemStatements />
      <RulesAndRegulations />
      <Footer />
    </div>
  );
}

export default App;
