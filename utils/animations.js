export const slideUp = {
  initial: { y: 240, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export const SlideRight = {
  initial: { x: 1700, opacity: 0 },
  animate: { x: 0, opacity: 100, transition: { duration: 0.5 } },
};

export const stagger = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export const icon = {
  hidden: {
    pathLength: 0,
    fillOpacity: 0,
    fill: "none",
  },
  visible: {
    pathLength: 1,
    fillOpacity: 0.75,
    fill: "#0075FF",
  },
};

export const iconSecondary = {
  hidden: {
    pathLength: 0,
    fillOpacity: 0,
    fill: "none",
  },
  visible: {
    pathLength: 1,
    fillOpacity: 0.2,
    fill: "#0075FF",
  },
};

export const transitionIcon = {
  default: { duration: 2, ease: "easeInOut" },
  fill: { delay: 3, duration: 2, ease: "easeIn" },
};
export const transitionIconLoader = {
  default: { duration: 2, ease: "easeInOut" },
  fill: {
    delay: 3,
    duration: 2,
    ease: "easeIn",
    repeat: Infinity,
    repeatType: "reverse",
  },
};
