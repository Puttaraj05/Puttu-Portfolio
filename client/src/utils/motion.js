export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? -120 : direction === "right" ? 120 : 0,
      y: direction === "up" ? 80 : direction === "down" ? 80 : 0,
      opacity: 0,
      scale: 0.95,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type,
        delay,
        duration,
        ease: type === "spring" ? undefined : [0.25, 0.46, 0.45, 0.94],
        stiffness: type === "spring" ? 150 : undefined,
        damping: type === "spring" ? 20 : undefined,
      },
    },
  };
}; 