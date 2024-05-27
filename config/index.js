module.exports = {
  USERNAME: process.env.USERNAME,
  PASSWORD: process.env.PASSWORD ?? "",
  DATABASE: process.env.DATABASE,
  HOST: process.env.HOST,
  DIALECT: process.env.DIALECT,
  PORT: process.env.PORT,
  DB_PORT: process.env.DB_PORT,
  HUGGINGFACE_API_KEY: process.env.HUGGINGFACE_API_KEY,
};
