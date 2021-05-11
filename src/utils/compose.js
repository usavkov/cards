export const compose = (...fn) => (arg) => {
  return fn.reduceRight((prev, next) => {
    return next(prev);
  }, arg);
};
