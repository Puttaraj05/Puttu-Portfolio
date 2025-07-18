import React from 'react';

const Resume = ({ darkMode }) => {
  return (
    <section
      id="resume"
      className="py-20"
      style={{ background: 'transparent' }}
    >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#8f00ff]">
            My <span className="text-[#b388ff]">Resume</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div
              className={`p-8 rounded-xl shadow-3d bg-glass backdrop-blur-xl`}
            >
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#a259ff]">Puttaraj Hiremath</h3>
                  <p
                    className={`${darkMode ? "text-[#b3e5fc]" : "text-[#232946]"}`}
                  >
                    B.Tech IT Student | Aspiring Software Developer
                  </p>
                </div>

                <a
                  href="/images/Resume_Puttaraj_hiremath.pdf"
                  className="mt-4 md:mt-0 px-6 py-3 bg-[#8f00ff] text-[#e0f2ff] font-medium rounded-lg shadow-md hover:bg-[#00f2fe] hover:text-[#232946] transition-colors duration-300 flex items-center cursor-pointer !rounded-button whitespace-nowrap"
                >
                  <i className="fas fa-download mr-2"></i>
                  Download PDF
                </a>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 pb-2 border-b border-[#b388ff] text-[#b388ff]">
                  Education
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between">
                      <p className="font-medium text-[#a259ff]">
                        B.Tech in Information Technology
                      </p>
                      <p className="text-sm text-[#80cbc4]">2023 - Present</p>
                    </div>
                    <p
                      className={`${darkMode ? "text-[#b3e5fc]" : "text-[#232946]"}`}
                    >
                      Malla Reddy Engineering College, Hyderabad
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <p className="font-medium text-[#a259ff]">Higher Secondary Education</p>
                      <p className="text-sm text-[#80cbc4]">2021 - 2023</p>
                    </div>
                    <p
                      className={`${darkMode ? "text-[#b3e5fc]" : "text-[#232946]"}`}
                    >
                      KLEs Prerana Pu Science College, Hubli
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 pb-2 border-b border-[#b388ff] text-[#b388ff]">
                  Technical Skills
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium mb-2 text-[#a259ff]">Programming Languages</p>
                    <p
                      className={`${darkMode ? "text-[#b3e5fc]" : "text-[#232946]"}`}
                    >
                      JavaScript, Python, Java, C++, HTML/CSS
                    </p>
                  </div>
                  <div>
                    <p className="font-medium mb-2 text-[#a259ff]">Frameworks & Libraries</p>
                    <p
                      className={`${darkMode ? "text-[#b3e5fc]" : "text-[#232946]"}`}
                    >
                      React.js, Node.js, Express.js
                    </p>
                  </div>
                  <div>
                    <p className="font-medium mb-2 text-[#a259ff]">Databases</p>
                    <p
                      className={`${darkMode ? "text-[#b3e5fc]" : "text-[#232946]"}`}
                    >
                      MongoDB, MySQL, Firebase
                    </p>
                  </div>
                  <div>
                    <p className="font-medium mb-2 text-[#a259ff]">Tools & Technologies</p>
                    <p
                      className={`${darkMode ? "text-[#b3e5fc]" : "text-[#232946]"}`}
                    >
                      Git, Github, VS Code, Postman, Netlify
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 pb-2 border-b border-[#b388ff] text-[#b388ff]">
                  Projects
                </h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-[#a259ff]">Snap-study</p>
                    <p
                      className={`${darkMode ? "text-[#b3e5fc]" : "text-[#232946]"}`}
                    >
                      SnapStudy is an AI-powered application that helps students and learners generate comprehensive study materials from various sources. Upload documents, provide links, or input text to automatically generate notes, summaries, flashcards, quizzes, and more.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-[#a259ff]">Object-dimension-detector</p>
                    <p
                        className={`${darkMode ? "text-[#b3e5fc]" : "text-[#232946]"}`}     
                    >
                      A web application for real-time object dimension measurement using computer vision and your camera. Built with Flask and OpenCV, this tool allows you to measure objects, save annotated images, and manage your measurement history—all from your browser.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 pb-2 border-b border-[#b388ff] text-[#b388ff]">
                  Certifications
                </h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-[#a259ff]">Microsoft Azure AI Fundamentals</p>
                    <p
                        className={`${darkMode ? "text-[#b3e5fc]" : "text-[#232946]"}`}
                    >
                      Microsoft (Nov '24)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Resume;
