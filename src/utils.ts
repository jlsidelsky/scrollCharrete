export const getScrollPercentage = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  return scrollTop / docHeight;
};
