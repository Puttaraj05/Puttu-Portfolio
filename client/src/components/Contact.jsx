import React, { useState } from 'react';
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import EarthCanvas from './EarthCanvas';
import PageTransition from './PageTransition';

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleFormChange = (e) => {
    const { name, value } = e.target;  
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setFormSubmitted(false);

    try {
      const apiUrl = "https://puttu-portfolio.onrender.com";
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (data.success) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitError(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <section
        id="contact"
        className="py-20 relative overflow-hidden"
        style={{ background: 'transparent' }}
      >
        {/* 3D Earth Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full opacity-20">
            <EarthCanvas />
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={slideIn("up", "tween", 0.1, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-center mb-4">
              Get In <span className="text-primary-light">Touch</span>
            </h2>
            <p className="text-center max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to contact me
              using the form below or through my social media channels.
            </p>
          </motion.div>

          <motion.div 
            variants={slideIn("left", "tween", 0.2, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col md:flex-row gap-12 items-stretch"
          >
            {/* Left: Contact Info */}
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div className="p-8 rounded-xl shadow-3d bg-glass backdrop-blur-xl h-full flex flex-col justify-between">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-[#e0f2ff] dark:bg-[#232946] mr-4">
                      <i className="fas fa-envelope text-primary-light"></i>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:hiremathputtraj05@gmail.com"
                        className="text-primary-light hover:underline"
                      >
                        hiremathputtraj05@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-[#e0f2ff] dark:bg-[#232946] mr-4">
                      <i className="fas fa-map-marker-alt text-primary-light"></i>
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-primary-light">Hyderabad, India</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-[#e0f2ff] dark:bg-[#232946] mr-4">
                      <i className="fas fa-phone text-primary-light"></i>
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-primary-light">+91-8904294109</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
                  <div className="flex space-x-4 mb-8">
                    <a
                      href="https://www.linkedin.com/in/puttrajhiremath/"
                      className={`p-3 rounded-full bg-[#e0f2ff] dark:bg-[#232946] hover:bg-primary-light transition-colors cursor-pointer`}
                    >
                      <i className="fab fa-linkedin text-primary-light"></i>
                    </a>
                    <a
                      href="https://github.com/Puttaraj05"
                      className="p-3 rounded-full bg-[#e0f2ff] dark:bg-[#232946] hover:bg-primary-light transition-colors cursor-pointer"
                    >
                      <i className="fab fa-github" style={{ color: "#181717" }}></i>
                    </a>
                    <a
                      href="https://x.com/puttraj05"
                      className="p-3 rounded-full bg-[#e0f2ff] dark:bg-[#232946] hover:bg-primary-light transition-colors cursor-pointer"
                    >
                      <i className="fab fa-twitter" style={{ color: "#1da1f2" }}></i>
                    </a>
                    <a
                      href="https://www.instagram.com/phantom_v3_05/"
                      className={`p-3 rounded-full bg-[#e0f2ff] dark:bg-[#232946] hover:bg-primary-light transition-colors cursor-pointer`}
                    >
                      <i className="fab fa-instagram text-pink-600"></i>
                    </a>
                  </div>
                  <div className="mt-8">
                    <h4 className="text-lg font-medium mb-4">Availability</h4>
                    <p className="text-primary-light">
                      I'm currently available for freelance work, internships, and
                      collaboration on interesting projects.
                    </p>
                    <div className="mt-4 p-3 rounded-lg bg-[#e0f2ff] dark:bg-[#232946]">
                      <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-green-500 mr-2 relative">
                          <span className="absolute inset-0 h-3 w-3 rounded-full bg-green-500 animate-ping opacity-75"></span>
                        </div>
                        <p className="text-sm font-medium text-green-800 dark:text-green-400">
                          Available for new opportunities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Contact Form */}
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-xl shadow-3d bg-glass backdrop-blur-xl h-full flex flex-col justify-between"
              >
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fas fa-user text-gray-400"></i>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className={`block w-full pl-10 p-3 rounded-lg border-none ${darkMode ? "bg-background-dark text-primary-light" : "bg-background-light text-primary-dark"} focus:ring-2 focus:ring-primary-light outline-none text-sm`}
                      placeholder="Puttu"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fas fa-envelope text-gray-400"></i>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className={`block w-full pl-10 p-3 rounded-lg border-none ${darkMode ? "bg-background-dark text-primary-light" : "bg-background-light text-primary-dark"} focus:ring-2 focus:ring-primary-light outline-none text-sm`}
                      placeholder="puttu@gmail.com"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={5}
                    className={`block w-full p-3 rounded-lg border-none ${darkMode ? "bg-background-dark text-primary-light" : "bg-background-light text-primary-dark"} focus:ring-2 focus:ring-primary-light outline-none text-sm`}
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-5 py-3 font-medium rounded-lg shadow-md transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap text-lg ${
                    isSubmitting
                      ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                      : 'bg-primary-dark text-primary-light hover:bg-primary-light'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
                {formSubmitted && (
                  <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg">
                    <i className="fas fa-check-circle mr-2"></i>
                    Thank you for your message! You will receive a confirmation email shortly.
                  </div>
                )}
                {submitError && (
                  <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-lg">
                    <i className="fas fa-exclamation-circle mr-2"></i>
                    {submitError}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
