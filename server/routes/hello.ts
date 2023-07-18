export default defineEventHandler((event) => {
  // console.log(event);
  return {
    success: true,
    data: "hello world from routes folder",
  };
});
