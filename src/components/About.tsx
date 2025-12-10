export function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          About The Hackathon
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              BI3 Hackathon is a premier coding competition that brings together 
              the brightest minds in technology to solve real-world challenges. 
              Whether you're a seasoned developer or just starting your coding journey, 
              this hackathon offers an incredible opportunity to learn, collaborate, and innovate.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Over 48 hours, teams will work together to build innovative solutions, 
              receive mentorship from industry experts, and compete for amazing prizes. 
              Join us for workshops, networking sessions, and the chance to make a real impact.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-gray-300">Expert mentorship and guidance</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-gray-300">Networking with industry professionals</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-gray-300">Hands-on workshops and tech talks</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-gray-300">Exciting prizes and swag</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-800 to-blue-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Event Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-600 pb-2">
                <span className="text-gray-400">Date</span>
                <span className="font-semibold">January 15-17, 2025</span>
              </div>
              <div className="flex justify-between border-b border-gray-600 pb-2">
                <span className="text-gray-400">Location</span>
                <span className="font-semibold">Virtual & In-Person</span>
              </div>
              <div className="flex justify-between border-b border-gray-600 pb-2">
                <span className="text-gray-400">Team Size</span>
                <span className="font-semibold">2-4 Members</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Registration</span>
                <span className="font-semibold text-green-400">Open Now!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
