import React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

const spring = { stiffness: 220, damping: 22, mass: 0.6 };

// Tilts its children in 3D towards the mouse, with a soft glare that follows
// the cursor. Only reacts to a mouse: touch input and users who prefer
// reduced motion keep the content flat, with the same markup either way.
const TiltCard = ({
  children,
  maxTilt = 8,
  glare = true,
  radius = "18px",
  style,
  ...props
}) => {
  const reduceMotion = useReducedMotion();

  // pointer position inside the card, 0..1 on each axis (0.5 = centre)
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  const rotateX = useTransform(sy, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(sx, [0, 1], [-maxTilt, maxTilt]);

  const glareX = useTransform(sx, (v) => `${v * 100}%`);
  const glareY = useTransform(sy, (v) => `${v * 100}%`);
  const glareOpacity = useSpring(0, spring);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.18), transparent 55%)`;

  const handleMove = (e) => {
    if (reduceMotion || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
    glareOpacity.set(1);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
    glareOpacity.set(0);
  };

  return (
    <div
      style={{ perspective: 1000, height: "100%", ...style }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      {...props}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          position: "relative",
          height: "100%",
          borderRadius: radius,
        }}
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: radius,
              pointerEvents: "none",
              background: glareBg,
              opacity: glareOpacity,
              zIndex: 30,
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

export default TiltCard;
