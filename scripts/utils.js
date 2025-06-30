export const debounce = (callback, delay = 250) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(args);
    }, delay);
  };
};

export const throttle = (callback, delay = 500) => {
  let throttled = false;
  let savedArgs = null;

  const processPending = () => {
    if (savedArgs == null) {
      throttled = false;
    } else {
      callback(...savedArgs);
      savedArgs = null;
      setTimeout(processPending, delay);
    }
  };

  return (...args) => {
    if (throttled) {
      savedArgs = args;
      return;
    }

    callback(...args);
    throttled = true;

    setTimeout(processPending, delay);
  };
};
