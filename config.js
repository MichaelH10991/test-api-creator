module.exports = {
  serviceName: "api-creator-test",
  corsOptions: {},
  bodyParserOptions: {
    bodyParserEnabled: true,
  },
  bodyParserEnabled: true,
  db: {
    uri:
      process.env.MONGO_URI ||
      "mongodb://admin:admin@localhost:27017/language-quiz?authSource=admin",
  },
};
