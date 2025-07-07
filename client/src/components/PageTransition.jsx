import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.15
      }}
      viewport={{ once: true, margin: "-150px" }}
      style={{ 
        background: 'transparent',
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 