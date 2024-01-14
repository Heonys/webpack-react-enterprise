// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fakeDelay = (promise: Promise<any>) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 500);
  }).then(() => promise);
};
