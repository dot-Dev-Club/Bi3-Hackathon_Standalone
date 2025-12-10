export function Hero() {
  return (
    <main className="min-h-screen hero-bg flex items-center justify-center relative text-gray-900 px-2 xs:px-4 sm:px-6" style={{ backgroundColor: '#E9B7F0' }}>
      {/* Top header with logos: left=Karunya, center=Bi3, right=Atom */}
      <header className="absolute inset-x-0 top-0 pointer-events-none">
        {/* logos are positioned relative to the header (viewport-wide) so left/right hit the edges */}
        <div className="absolute left-0 top-1 xs:top-2 sm:top-0 pointer-events-auto">
          <div className="m-1 xs:m-2 sm:m-3 p-1 xs:p-2 sm:p-3 bg-white/40 backdrop-blur-md border-2 border-black flex items-center justify-center w-14 h-14 xs:w-16 xs:h-16 sm:w-28 sm:h-28 rounded-none">
            <img src="/images/karunya.jpeg" alt="Karunya" className="h-8 w-8 xs:h-10 xs:w-10 sm:h-20 sm:w-20 object-contain" />
          </div>
        </div>

        <div className="absolute left-1/2 top-1 xs:top-2 sm:top-0 transform -translate-x-1/2 pointer-events-auto">
          <div className="m-1 xs:m-2 sm:m-3 p-1 xs:p-2 sm:p-3 bg-white/40 backdrop-blur-md border-2 border-black flex items-center justify-center w-14 h-14 xs:w-16 xs:h-16 sm:w-28 sm:h-28 rounded-none">
            <img src="/images/bi3.png" alt="BI3" className="h-8 w-8 xs:h-10 xs:w-10 sm:h-20 sm:w-20 object-contain" />
          </div>
        </div>

        <div className="absolute right-0 top-1 xs:top-2 sm:top-0 pointer-events-auto">
          <div className="m-1 xs:m-2 sm:m-3 p-1 xs:p-2 sm:p-3 bg-white/40 backdrop-blur-md border-2 border-black flex items-center justify-center w-14 h-14 xs:w-16 xs:h-16 sm:w-28 sm:h-28 rounded-none">
            <img src="/images/atom.png" alt="Atom" className="h-8 w-8 xs:h-10 xs:w-10 sm:h-20 sm:w-20 object-contain" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-2 xs:px-4 sm:px-6 py-20 xs:py-24 sm:py-24 mt-16 xs:mt-20 sm:mt-12 text-center">
        <div className="inline-block px-2 xs:px-4 sm:px-6 py-1 xs:py-2 sm:py-3 border-2 border-black rounded-md bg-white/30 backdrop-blur-md">
          <p className="text-xs xs:text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold uppercase tracking-wide text-gray-900">Division of Data Science & Cyber Security</p>
        </div>

        <div className="mt-4 xs:mt-6 sm:mt-8">
          <h1 className="mt-4 xs:mt-6 font-extrabold tracking-tight leading-none">
            <div className="font-extrabold text-[#662768]" style={{ fontSize: 'clamp(1.3rem, 6vw, 6rem)' }}>BI3 TECHNOLOGIES</div>
            <div className="mt-2 xs:mt-4 text-sm xs:text-base sm:text-xl text-[#662768]">combines with</div>
            <div className="mt-3 xs:mt-6 font-extrabold text-[#662768]" style={{ fontSize: 'clamp(0.9rem, 4.5vw, 4rem)' }}>INNOVATE-X</div>
          </h1>

          <p className="mt-4 xs:mt-6 text-sm xs:text-base sm:text-xl text-[#662768] max-w-3xl mx-auto px-2">Where innovation meets technology.</p>

          <div className="mt-4 xs:mt-6 flex items-center justify-center gap-4 px-4">
            <a href="#about" className="w-full xs:w-auto text-sm xs:text-base sm:inline-block sm:w-auto text-center rounded-md bg-[#662768] hover:bg-[#5a1f5f] text-white px-4 xs:px-6 py-2 xs:py-3 font-semibold shadow-lg">Learn More</a>
          </div>

          <div className="mt-6 xs:mt-8 flex justify-center">
            <span className="w-20 xs:w-28 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-600" />
          </div>
        </div>
      </div>
    </main>
  );
}