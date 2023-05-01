// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function debounce(cb: (args?: any) => void, delay = 250) {
  let timeout: ReturnType<typeof setTimeout>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
