import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          BI3 Hackathon 2025
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Innovate. Create. Transform. Join us for an exciting 48-hour coding adventure!
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Register Now
          </Button>
          <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
            Learn More
          </Button>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-purple-400">48+</h3>
            <p className="text-gray-400">Hours of Hacking</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-400">$10K+</h3>
            <p className="text-gray-400">In Prizes</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-400">500+</h3>
            <p className="text-gray-400">Participants</p>
          </div>
        </div>
      </div>
    </section>
  );
}
