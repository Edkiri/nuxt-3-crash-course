export const useUtils = (): { sayHello: () => void } => {
  const sayHello = () => console.log("Hello");
  return { sayHello };
};
