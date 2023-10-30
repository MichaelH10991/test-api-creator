const express = require("express");
const apiCreator = require("@iobxt/api-creator");
const dbResource = require("@iobxt/db-resource");
const schemas = require("./schemas");
const config = require("./config");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const resources = {
  db: dbResource(config.db, schemas),
};

const api = apiCreator.init(`${__dirname}/api`, config, resources, app);

console.log(api);

module.exports = api;
