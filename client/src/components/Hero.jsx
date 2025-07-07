import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';

const Hero = ({ darkMode }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden"
      style={{ background: 'transparent' }}
    >
        {/* 3D Glassmorphic Blob */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          <div className="w-96 h-96 bg-glass rounded-full shadow-3d backdrop-blur-xl animate-spin-slow border-4 border-primary/30" style={{animationDuration: '12s'}}></div>
        </div>
        <div className="container mx-auto px-6 z-20 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-16 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-light drop-shadow-3d">
              <span className="block">Hi, I'm Puttaraj</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-accent-light">
              Aspiring Software Developer
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white max-w-lg mx-auto md:mx-0 bg-glass rounded-xl shadow-glass p-4">
              B.Tech IT student passionate about creating elegant solutions to complex problems. Specializing in full-stack development with a focus on modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-primary-light text-primary-dark font-medium rounded-lg shadow-lg hover:bg-primary-dark transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
              >
                View My Work
              </a>
              <a
                href="#blog"
                className="px-8 py-3 bg-transparent border-2 border-primary-light text-primary-light font-medium rounded-lg hover:bg-primary-light/10 transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
              >
                Read My Blog
              </a>
            </div>
          </div>
          {/* Advanced 3D Model */}
          <div className="w-full md:w-1/2 flex justify-center items-center h-96">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ width: '100%', height: '100%' }}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <Environment preset="sunset" />
              <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
                {/* Impressive torus knot model */}
                <mesh castShadow receiveShadow>
                  <torusKnotGeometry args={[1.1, 0.4, 128, 32]} />
                  <meshPhysicalMaterial
                    color="#00f2fe"
                    roughness={0.05}
                    metalness={1}
                    clearcoat={1}
                    clearcoatRoughness={0.01}
                    transmission={0.98}
                    thickness={1.5}
                    ior={1.7}
                    reflectivity={1}
                    sheen={1}
                    sheenColor="#8f00ff"
                  />
                </mesh>
              </Float>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
            </Canvas>
          </div>
        </div>
      </section>
  );
};

export default Hero; 