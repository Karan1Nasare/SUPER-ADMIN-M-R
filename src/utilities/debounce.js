export default function debounce(func, options) {
  const { delay = 300, immediate = false } = options;

  let timeoutId;

  return function (...args) {
    const later = () => {
      timeoutId = null;
      if (!immediate) {
        func.apply(this, args);
      }
    };

    const callNow = immediate && !timeoutId;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(later, delay);

    if (callNow) {
      func.apply(this, args);
    }
  };
}
