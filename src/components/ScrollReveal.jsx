import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable component for animating elements as they scroll into view.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to animate
 * @param {number} [props.delay=0] - Delay before animation starts (in seconds)
 * @param {'up' | 'down' | 'left' | 'right' | 'none'} [props.direction='up'] - Direction of movement
 * @param {number} [props.duration=0.8] - Animation duration (in seconds)
 * @param {number} [props.distance=50] - Distance of translation (in pixels)
 * @param {boolean} [props.once=true] - Whether to animate only once
 */
export default function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up', 
  duration = 0.8,
  distance = 40,
  scale = 1,
  blur = false,
  once = true
}) {
  const getInitialOffset = () => {
    switch (direction) {
      case 'up': return { y: distance, x: 0 };
      case 'down': return { y: -distance, x: 0 };
      case 'left': return { x: distance, y: 0 };
      case 'right': return { x: -distance, y: 0 };
      default: return { x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: scale,
        filter: blur ? 'blur(8px)' : 'blur(0px)',
        ...getInitialOffset()
      }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        filter: 'blur(0px)',
        x: 0, 
        y: 0 
      }}
      viewport={{ once, margin: "-80px" }}
      style={{ transform: "translateZ(0)", willChange: "transform, opacity, filter" }}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: [0.22, 1, 0.36, 1] // Out-expo cubic-bezier curve for luxurious feel
      }}
    >
      {children}
    </motion.div>
  );
}
