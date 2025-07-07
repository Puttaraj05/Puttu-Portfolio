import React from "react";

const Blog = () => {
  return (
    <section className="py-20 px-4 md:px-0 bg-gradient-to-b from-[#181c2b] via-[#232946] to-[#181c2b] flex justify-center">
      <div className="max-w-3xl w-full bg-white/10 dark:bg-[#232946]/60 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-[#8f00ff]/20">
        <h2 className="text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00bfae] to-[#8f00ff] drop-shadow-lg">
          My Tech Journey: From Student to Developer
        </h2>
        <p className="text-lg mb-6 text-[#e0f2ff]">
          As a BTech IT student, my journey in tech has been anything but ordinary. What started as curiosity about how websites work has turned into a deep passion for building smart, functional, and impactful web applications.
        </p>

        <h3 className="text-2xl font-semibold mb-4 mt-8 text-[#a259ff]">Why I Built This Portfolio</h3>
        <p className="text-lg mb-6 text-[#b3e5fc]">
          I created this portfolio not just to showcase my projects, but to tell my story. Every line of code reflects my growth—each project is a milestone in my learning path. Whether it's experimenting with new JavaScript frameworks or integrating machine learning models, my goal is always to learn, build, and improve.
        </p>

        <h3 className="text-2xl font-semibold mb-4 mt-8 text-[#a259ff]">Projects That Define Me</h3>
        <p className="text-lg mb-2 text-[#e0f2ff]">I believe projects speak louder than words. Some of the key ones include:</p>
        <ul className="list-none flex flex-wrap gap-3 mb-6">
          <li className="bg-gradient-to-r from-[#667eea]/30 to-[#764ba2]/30 text-[#e0f2ff] font-semibold px-4 py-2 rounded-full shadow backdrop-blur-sm border border-[#667eea]/20">Snap Study</li>
          <li className="bg-gradient-to-r from-[#667eea]/30 to-[#764ba2]/30 text-[#e0f2ff] font-semibold px-4 py-2 rounded-full shadow backdrop-blur-sm border border-[#667eea]/20">Object Dimension Detector</li>
        </ul>
        <p className="text-lg mb-6 text-[#b3e5fc]">
          Each of these reflects skills in React.js, Node.js, Java, Python, and AI/ML integration—skills I've honed through hours of practice, debugging, and late-night builds.
        </p>

        <h3 className="text-2xl font-semibold mb-4 mt-8 text-[#a259ff]">What You'll Find Here</h3>
        <ul className="list-disc list-inside text-lg mb-6 space-y-2 text-[#e0f2ff]">
          <li><strong>Technical Blogs:</strong> I write about the concepts I learn—be it React lifecycle, APIs, or OpenAI models.</li>
          <li><strong>Project Breakdowns:</strong> Each project comes with a short case study explaining the idea, tools used, and lessons learned.</li>
          <li>
            <strong>Open Source Contributions:</strong> I actively share projects and code on{" "}
            <a href="https://github.com/Puttaraj05" target="_blank" rel="noopener noreferrer" className="text-purple-300 underline">
              GitHub
            </a>{" "}
            to contribute to the community.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4 mt-8 text-[#a259ff]">What's Next?</h3>
        <p className="text-lg mb-6 text-[#b3e5fc]">
          I'm always on the lookout for new ideas to solve real-world problems using technology. Whether it's collaborating on open-source, contributing to startups, or working on AI innovations, I'm excited for what's ahead.
        </p>

        <blockquote className="border-l-4 border-[#8f00ff] pl-6 italic text-lg text-[#e0f2ff] bg-[#8f00ff]/10 rounded-lg mt-10">
          "The best way to learn is by building. And the best way to grow is by sharing."<br />
          <span className="text-sm text-[#b3e5fc]">– This blog is my space to do both.</span>
        </blockquote>
      </div>
    </section>
  );
};

export default Blog; 