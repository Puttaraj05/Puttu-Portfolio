import React from 'react';

const Navigation = ({ darkMode, toggleDarkMode, activeSection, scrollToSection, menuOpen, toggleMenu }) => {
  return (
    <nav className="fixed w-full z-50 bg-white/60 dark:bg-[#181c2b]/70 backdrop-blur-md shadow-md border-b border-[#e0e7ef] dark:border-[#223366] rounded-b-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="group flex items-center space-x-2 cursor-pointer"
            >
              {/* Logo Icon */}
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
              </div>
              
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-xl font-extrabold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent tracking-tight">
                  Puttaraj
                </span>
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#blog", label: "Blog" },
              { href: "#resume", label: "Resume" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href.substring(1));
                }}
                className={`px-1 py-1 text-lg font-medium transition-colors duration-200
                  ${activeSection === item.label.toLowerCase() ? "text-[#00bfae] dark:text-[#00bfae]" : "text-[#223366] dark:text-[#e0e7ef]"}
                  hover:text-[#00bfae] dark:hover:text-[#00bfae]`
                }
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00bfae] cursor-pointer !rounded-button"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <i className="fas fa-sun text-yellow-400 text-xl"></i>
              ) : (
                <i className="fas fa-moon text-[#223366] text-xl"></i>
              )}
            </button>

            <button
              onClick={toggleMenu}
              className="md:hidden ml-4 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00bfae] cursor-pointer !rounded-button"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <i className="fas fa-times text-xl"></i>
              ) : (
                <i className="fas fa-bars text-xl"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-[#181c2b]/95 shadow-lg border-b border-[#e0e7ef] dark:border-[#223366] text-[#223366] dark:text-[#e0e7ef] rounded-b-xl backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#blog", label: "Blog" },
              { href: "#resume", label: "Resume" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href.substring(1));
                  toggleMenu();
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                  ${activeSection === item.label.toLowerCase() ? "text-[#00bfae] bg-[#e0e7ef]/20 dark:bg-[#223366] font-bold" : "hover:text-[#00bfae]"}
                `}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
