// Shared ease-out curve for reveals: fast start, long soft landing.
// Same cubic-bezier the project cards use for their image zoom.
export const EASE_OUT = [0.22, 1, 0.36, 1];

// Scroll reveal used across sections: rise a little, sharpen out of a light
// blur. The filter is dropped once done so no element keeps a filter layer
// (it would cost paint time and flatten TiltCard's 3D).
export const revealVariants = (y = 24, delay = 0) => ({
  hidden: { opacity: 0, y, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay, ease: EASE_OUT },
    transitionEnd: { filter: "none" },
  },
});

// Reveal for items in a list, each one `step` seconds after the previous.
// Pass the item's index as `custom`. The delay is explicit per item rather than
// a parent's staggerChildren, which does not reach through styled wrappers.
export const staggeredReveal = (base = 0, step = 0.12, y = 24) => ({
  hidden: revealVariants(y).hidden,
  visible: (i = 0) => revealVariants(y, base + i * step).visible,
});
