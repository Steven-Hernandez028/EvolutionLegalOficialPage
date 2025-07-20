  // Animaciones para los elementos del navbar
  export const navItemVariants : any= {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -2,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  }

  export const logoVariants : any = {
    initial: { opacity: 0, x: -50, rotate: -180 },
    animate: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 20, delay: 0.2 },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  }

   export const dropdownVariants : any = {
    initial: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      rotateX: -15,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      rotateX: -15,
      transition: { duration: 0.2 },
    },
  }

  export const dropdownItemVariants : any= {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    hover: {
      x: 10,
      backgroundColor: "rgba(203, 162, 88, 0.1)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  }

  export const mobileMenuVariants : any= {
    initial: { opacity: 0, height: 0, y: -20 },
    animate: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  }

  export const mobileItemVariants : any= {
    initial: { opacity: 0, x: -30 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  }

  export const hamburgerVariants  : any= {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  }