export function Footer() {
  return (
    <footer className="bg-[#410F43] text-white py-10 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
          
          {/* Hackathon Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2" style={{ color: '#E9B7F0' }}>
              BI3 BYTE BEATS
            </h3>
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{ color: '#E9B7F0' }}>
              HACKATHON
            </h4>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Empowering the next generation of innovators through cutting-edge technology challenges and collaborative learning experiences.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-lg" style={{ color: '#E9B7F0' }}>Quick Navigation</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#countdown" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300">
                  Problem Statements
                </a>
              </li>
              <li>
                <a href="#rules" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300">
                  Rules & Regulations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-lg" style={{ color: '#E9B7F0' }}>Contact Us</h4>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#E9B7F0' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:atom@karunya.edu.in" className="text-gray-300 hover:text-white transition-colors break-all">
                  atom@karunya.edu.in
                </a>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#E9B7F0' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-gray-300">DSCS Department</span>
              </div>
              {/* <div className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 text-purple-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">University Campus</span>
              </div> */}
            </div>
          </div>

          {/* Organized By */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-lg" style={{ color: '#E9B7F0' }}>Organized By</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                <img src="/images/bi3.png" alt="BI3 Technologies" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                <img src="/images/atom.png" alt="Atom" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                <img src="/images/karunya.jpeg" alt="Karunya" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-6 sm:mb-8" style={{ background: 'linear-gradient(to right, transparent, #E9B7F0, transparent)' }}></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2025 BI3 Byte Beats Hackathon. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm">
            Made By DotDev Club
          </p>
        </div>
      </div>
    </footer>
  );
}
