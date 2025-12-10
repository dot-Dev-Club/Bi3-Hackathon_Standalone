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

      <div className="container mx-auto px-2 xs:px-4 sm:px-6 py-8 xs:py-10 sm:py-8 lg:py-6 mt-20 xs:mt-24 sm:mt-28 lg:mt-32 text-center">
        <div className="inline-block px-2 xs:px-4 sm:px-6 py-1 xs:py-2 sm:py-2 border-2 border-black rounded-md bg-white/30 backdrop-blur-md">
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold uppercase tracking-wide text-gray-900">Division of Data Science & Cyber Security</p>
        </div>

        <div className="mt-2 xs:mt-3 sm:mt-3 lg:mt-4">
          <h1 className="mt-1 xs:mt-2 lg:mt-2 font-extrabold tracking-tight leading-none">
            <div className="font-extrabold text-[#662768]" style={{ fontSize: 'clamp(1.2rem, 4.5vw, 3.5rem)' }}>BI3 TECHNOLOGIES</div>
            <div className="mt-0.5 xs:mt-1 sm:mt-1 text-xs xs:text-sm sm:text-base lg:text-lg text-[#662768]">and</div>
            <div className="mt-0.5 xs:mt-1 sm:mt-1 font-extrabold text-[#662768]" style={{ fontSize: 'clamp(0.8rem, 3.5vw, 2.5rem)' }}>INNOVATE-X</div>
            <div className="mt-0.5 xs:mt-1 sm:mt-1 text-xs xs:text-sm sm:text-base lg:text-lg text-[#662768]">combined for this hackathon</div>
          </h1>

          <div className="mt-3 xs:mt-4 sm:mt-4 lg:mt-5">
            <div className="font-extrabold text-[#662768]" style={{ fontSize: 'clamp(1.4rem, 5.5vw, 4.5rem)' }}>BI3 BYTE BEATS</div>
            <div className="font-extrabold text-[#662768]" style={{ fontSize: 'clamp(1.1rem, 4vw, 3.5rem)' }}>HACKATHON</div>
          </div>

          <p className="mt-2 xs:mt-3 sm:mt-3 text-xs xs:text-sm sm:text-base lg:text-lg text-[#662768] max-w-3xl mx-auto px-2">Where innovation meets technology.</p>

          {/* <div className="mt-4 xs:mt-6 flex items-center justify-center gap-4 px-4">
            <a href="#about" className="w-full xs:w-auto text-sm xs:text-base sm:inline-block sm:w-auto text-center rounded-md bg-[#662768] hover:bg-[#5a1f5f] text-white px-4 xs:px-6 py-2 xs:py-3 font-semibold shadow-lg">Learn More</a>
          </div> */}

          <div className="mt-3 xs:mt-4 sm:mt-4 flex justify-center">
            <span className="w-16 xs:w-20 sm:w-24 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-600" />
          </div>
        </div>
      </div>
    </main>
  );
}