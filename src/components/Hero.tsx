export function Hero() {
  return (
    <main className="min-h-screen hero-bg flex items-center justify-center relative text-gray-900" style={{ backgroundColor: '#E9B7F0' }}>
      {/* Top header with logos: left=Karunya, center=Bi3, right=Atom */}
      <header className="absolute inset-x-0 top-0 pointer-events-none">
        {/* logos are positioned relative to the header (viewport-wide) so left/right hit the edges */}
        <div className="absolute left-0 top-2 sm:top-0 pointer-events-auto">
          <div className="m-2 sm:m-3 p-2 sm:p-3 bg-white/40 backdrop-blur-md border-2 border-black flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 rounded-none">
            <img src="/images/karunya.jpeg" alt="Karunya" className="h-12 w-12 sm:h-20 sm:w-20 object-contain" />
          </div>
        </div>

        <div className="hidden sm:block absolute left-1/2 top-2 sm:top-0 transform -translate-x-1/2 pointer-events-auto">
          <div className="m-2 sm:m-3 p-2 sm:p-3 bg-white/40 backdrop-blur-md border-2 border-black flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 rounded-none">
            <img src="/images/bi3.png" alt="BI3" className="h-12 w-12 sm:h-20 sm:w-20 object-contain" />
          </div>
        </div>

        <div className="absolute right-0 top-2 sm:top-0 pointer-events-auto">
          <div className="m-2 sm:m-3 p-2 sm:p-3 bg-white/40 backdrop-blur-md border-2 border-black flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 rounded-none">
            <img src="/images/atom.png" alt="Atom" className="h-12 w-12 sm:h-20 sm:w-20 object-contain" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 border-2 border-black rounded-md bg-white/30 backdrop-blur-md">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold uppercase tracking-wide text-gray-900">Division of Data Science & Cyber Security</p>
        </div>

        <div className="mt-8">
          <h1 className="mt-6 font-extrabold tracking-tight leading-none">
            <div className="font-extrabold text-[#662768]" style={{ fontSize: 'clamp(2.5rem, 8vw, 9rem)' }}>BI3 TECHNOLOGIES</div>
            <div className="mt-4 text-xl sm:text-2xl text-[#662768]">combines with</div>
            <div className="mt-6 font-extrabold text-[#662768]" style={{ fontSize: 'clamp(1.5rem, 5.5vw, 5.5rem)' }}>INNOVATE-X</div>
          </h1>

          <p className="mt-6 text-xl sm:text-2xl text-[#662768] max-w-3xl mx-auto">Where innovation meets technology.</p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="#about" className="w-full sm:inline-block sm:w-auto text-center rounded-md bg-[#662768] hover:bg-[#5a1f5f] text-white px-6 py-3 font-semibold shadow-lg">Learn More</a>
          </div>

          <div className="mt-8 flex justify-center">
            <span className="w-28 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-600" />
          </div>
        </div>
      </div>
    </main>
  );
}
