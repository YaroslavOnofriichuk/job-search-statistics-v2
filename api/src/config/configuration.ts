export const configuration = () => ({
  port: parseInt(process.env.API_PORT, 10) || 3000,
});
