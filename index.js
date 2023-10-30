const apiCreator = require("@iobxt/api-creator");
const dbResource = require("@iobxt/db-resource");
const schemas = require("./schemas");
const config = require("./config");

const resources = {
  db: dbResource(config.db, schemas),
};

apiCreator.init(`${__dirname}/api`, config, resources);
