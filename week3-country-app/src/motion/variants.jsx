
export const countryCards = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.01, delayChildren: 0.01 },
  },
};

export const languageCards = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const headerItems = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
};

export const countryCard = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  }
};

export const languageCard = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  }
};

export const headerItem = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  }
};

export const cardOverlayContainer = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  }
};