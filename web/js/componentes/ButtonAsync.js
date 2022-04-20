export const inputDelay = (delayedText) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (delayedText === "NO") {
        return reject(new Error("Error Test"));
      }
      resolve(delayedText);
    }, 2000);
  });
};
