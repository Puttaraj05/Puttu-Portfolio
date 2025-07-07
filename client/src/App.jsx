// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from "react";
import Blog from "./Blog";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";





const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - 200 &&
          window.scrollY < sectionTop + sectionHeight - 200
        ) {
          current = section.getAttribute("id") || "";
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset form submission status after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#181c2b] via-[#232946] to-[#1a1a2e]">
      <Navigation 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
      />
      
      <Hero darkMode={darkMode} />
      
      <About darkMode={darkMode} />
      
      <Projects />
      
      <section id="blog">
        <Blog />
      </section>

      <Resume darkMode={darkMode} />
      
      <Contact 
        darkMode={darkMode}
        formData={formData}
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
        formSubmitted={formSubmitted}
      />

      {/* Footer */}
      <footer
        className="py-12 text-primary-light"
        style={{ background: 'transparent' }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            {/* About This Site */}
            <div className="mb-6 md:mb-0 md:w-2/3">
              <h4 className="font-semibold mb-3">About This Site</h4>
              <p className="text-sm max-w-md">
                Built with React & Tailwind CSS. Showcasing my projects, skills, and journey as a developer.
              </p>
            </div>
            {/* Socials */}
            <div className="md:w-1/3 flex flex-col items-center md:items-end">
              <h4 className="font-semibold mb-3">Socials</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/puttrajhiremath/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/Puttaraj05" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" style={{ color: "#181717" }}></i></a>
                <a href="https://x.com/puttraj05" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" style={{ color: "#1da1f2" }}></i></a>
                <a href="https://www.instagram.com/phantom_v3_05/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram text-pink-600"></i></a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-primary-dark flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Puttaraj Hiremath. All rights reserved.
            </p>

          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <a
        href="#home"
        className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg ${darkMode ? "bg-primary-dark hover:bg-primary-light" : "bg-primary-light hover:bg-primary-dark"} text-primary-light transition-colors cursor-pointer !rounded-button`}
        aria-label="Back to top"
        style={{background: 'linear-gradient(135deg, #8f00ff 0%, #00f2fe 100%)'}}
      >
        <i className="fas fa-arrow-up"></i>
      </a>
    </div>
  );
};

export default App;