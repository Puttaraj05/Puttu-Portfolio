import React from 'react';
import puttuImg from '../assets/WhatsApp Image 2025-07-02 at 20.50.51.jpeg';

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className="py-20"
      style={{ background: 'transparent' }}
    >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#8f00ff]">
            About <span className="text-primary-light">Me</span>
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/3">
              <div className="relative mx-auto max-w-xs">
                <div
                  className={`absolute inset-0 rounded-xl ${darkMode ? "bg-primary-dark" : "bg-primary-light"} transform rotate-6`}
                ></div>
                <img
                  src={puttuImg}
                  alt="Puttu"
                  className="relative z-10 rounded-xl shadow-lg object-cover object-top"
                />
              </div>

              <div className="mt-12 space-y-6">
                <div
                  className={`p-6 rounded-xl shadow-3d bg-glass backdrop-blur-xl`}
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <i className="fas fa-graduation-cap mr-3 text-primary-light"></i>
                    Education
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-[#a259ff]">
                        B.Tech in Information Technology
                      </p>
                      <p
                        className={`${darkMode ? "text-[#b3e5fc]" : "text-primary-light"}`}
                      >
                        Malla Reddy Engineering College, Hyderabad
                      </p>
                      <p className="text-sm text-primary-light">2023 - Present</p>
                    </div>
                    <div>
                      <p className="font-medium text-[#a259ff]">Higher Secondary Education</p>
                      <p
                        className={`${darkMode ? "text-[#b3e5fc]" : "text-primary-light"}`}
                      >
                        KLEs Prerana Pu Science College, Hubli
                      </p>
                      <p className="text-sm text-primary-light">2021 - 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/3">
              <div
                className={`p-8 rounded-xl shadow-3d bg-glass backdrop-blur-xl mb-8`}
              >
                <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
                <p className="mb-4">
                  I'm a passionate B.Tech IT student with a strong interest in
                  software development and modern web technologies. My journey
                  in tech started when I was 15, tinkering with HTML and CSS to
                  build simple websites.
                </p>
                <p className="mb-4">
                  Today, I'm focused on mastering full-stack development, with
                  particular interest in React.js, Node.js, and cloud
                  technologies. I believe in writing clean, efficient code and
                  creating intuitive user experiences.
                </p>
                <p>
                  When I'm not coding, you can find me contributing to
                  open-source projects, writing technical blog posts, or
                  exploring new technologies to expand my skill set.
                </p>
              </div>

              <div
                className={`p-8 rounded-xl shadow-3d bg-glass backdrop-blur-xl`}
              >
                <h3 className="text-2xl font-semibold mb-6">
                  Technical Skills
                </h3>
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
            </div>
          </div>
        </div>
      </section>
  );
};

export default About; 