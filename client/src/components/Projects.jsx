import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

const projectImages = {
  "Snap-study": "/images/snapstudy.png",
  "Object-dimension-detector": "/images/objectdd.png",
  // Add more as needed
   "Smart-Waste-Segregation-Assistant": "/images/smartwaste.png", 
   
};

const projectDescriptions = {
  "Snap-study": "SnapStudy is an AI-powered application that helps students and learners generate comprehensive study materials from various sources. Upload documents, provide links, or input text to automatically generate notes, summaries, flashcards, quizzes, and more.",
  "Object-dimension-detector": "A web application for real-time object dimension measurement using computer vision and your camera. Built with Flask and OpenCV, this tool allows you to measure objects, save annotated images, and manage your measurement history—all from your browser.",
  "Smart-Waste-Segregation-Assistant": "A smart assistant that uses AI and IoT to automatically segregate waste into different categories, promoting efficient recycling and waste management. Built with Python, TensorFlow, and Arduino, this project demonstrates real-world application of machine learning and embedded systems.",
  // Add more as needed
};

// Project Card Component
const ProjectCard = ({ repo, index }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.03, // Only scale, no y movement
        transition: { 
          type: "tween", 
          duration: 0.2, 
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
      className="group relative bg-gradient-to-br from-[#232946]/80 to-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-3d transform transition-all duration-300 border border-[#232946]/50 hover:border-[#00f2fe]/50 cursor-pointer w-full sm:w-[360px]"
    >
      {/* Image Container */}
      <div className="relative w-full h-[200px] overflow-hidden">
        {projectImages[repo.name] ? (
          <img
            src={projectImages[repo.name]}
            alt={`${repo.name} thumbnail`}
            className="w-full h-full object-contain bg-gradient-to-br from-[#232946]/50 to-[#1a1a2e]/50"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#00f2fe]/20 to-[#8f00ff]/20 flex items-center justify-center">
            <i className="fas fa-code text-4xl text-[#00f2fe]/50"></i>
          </div>
        )}

        {/* GitHub Link Overlay */}
        <div className="absolute inset-0 flex justify-end m-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            onClick={() => window.open(repo.html_url, "_blank")}
            className="bg-gradient-to-r from-[#00f2fe] to-[#8f00ff] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:scale-110 transition-transform duration-200"
          >
            <i className="fab fa-github text-white text-lg"></i>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-white font-bold text-[20px] mb-2 group-hover:text-[#00f2fe] transition-colors duration-300">
          {repo.name.replace(/[-_]/g, ' ')}
        </h3>
        <p className="text-[#e0f2ff]/80 text-[13px] leading-relaxed mb-3 min-h-[50px]">
          {projectDescriptions[repo.name] || "A fascinating project showcasing modern development practices and innovative solutions."}
        </p>

        {/* Project Stats */}
        <div className="flex items-center justify-between mb-3 text-xs text-[#e0f2ff]/60">
          <div className="flex items-center space-x-3">
            <span className="flex items-center">
              <i className="fas fa-star mr-1 text-yellow-400"></i>
              {repo.stargazers_count || 0}
            </span>
            <span className="flex items-center">
              <i className="fas fa-code-branch mr-1 text-[#00f2fe]"></i>
              {repo.forks_count || 0}
            </span>
          </div>
          <span className="text-xs px-2 py-1 bg-[#00f2fe]/20 text-[#00f2fe] rounded-full">
            {repo.language || "JavaScript"}
          </span>
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-1">
          {repo.language && (
            <span className="text-[12px] text-[#00f2fe] bg-[#00f2fe]/10 px-2 py-1 rounded-full">
              #{repo.language}
            </span>
          )}
          <span className="text-[12px] text-[#8f00ff] bg-[#8f00ff]/10 px-2 py-1 rounded-full">
            #Web Dev
          </span>
          <span className="text-[12px] text-[#e0f2ff] bg-[#e0f2ff]/10 px-2 py-1 rounded-full">
            #React
          </span>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#00f2fe]/30 transition-all duration-500 pointer-events-none"></div>
    </motion.div>
  );
};

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Puttaraj05/repos")
      .then((res) => res.json())
      .then((data) => {
        // Sort to highlight Snap-study, Object-dimension-detector, and Smart-Waste-Segregation-Assistant first
        const highlight = ["Snap-study", "Object-dimension-detector", "Smart-Waste-Segregation-Assistant"];
        // Only show highlighted projects
        const filtered = data.filter(r => highlight.includes(r.name));
        setRepos(filtered);
      });
  }, []);

  return (
    <section
      id="projects"
      className="py-20"
      style={{ background: 'transparent' }}
    >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#e0f2ff] mb-4">
              <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent font-extrabold tracking-wider">Projects</span>
            </h2>
            <p className="text-[#e0f2ff]/80 text-lg max-w-3xl mx-auto leading-relaxed">
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described with
              links to code repositories and live demos in it. It reflects my
              ability to solve complex problems, work with different technologies,
              and manage projects effectively.
            </p>
          </div>

          <motion.div 
            variants={slideIn("left", "tween", 0.1, 1.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-nowrap gap-7 justify-start overflow-x-auto pb-4 hide-scrollbar"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {repos.length === 0 ? (
              <div className="text-center text-lg text-gray-300">Loading projects...</div>
            ) : (
              repos.map((repo, index) => (
                <ProjectCard key={repo.id} repo={repo} index={index} />
              ))
            )}
          </motion.div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/Puttaraj05"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-dark text-primary-light font-medium rounded-lg shadow-md hover:bg-primary-light transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
            >
              <i className="fab fa-github mr-2"></i>
              View More on GitHub
            </a>
          </div>
        </div>
      </section>
  );
};

export default Projects;
