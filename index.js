const apiCreator = require("@iobxt/api-creator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const express = require("express");
const app = express();

const config = require("./config");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const dbConfig = {
  uri: "mongodb://admin:admin@0.0.0.0:27017",
};

const schemas = [
  {
    name: "BlogPost",
    schema: new Schema({
      author: Schema.ObjectId,
      title: String,
      body: String,
      date: Date,
    }),
  },
];

const db = (config, schemas) => {
  try {
    const conn = mongoose.createConnection(config.uri);
    if (conn) {
      console.log("info: Connection successfully created with:", config.uri);
    }
    return schemas.reduce((acc, schema) => {
      const Model = conn.model(schema.name, schema.schema);
      return { ...acc, [schema.name]: Model };
    }, {});
  } catch (error) {
    console.log("error: here was an error setting up the mongo connection", e);
  }
};

const resources = {
  db: db(dbConfig, schemas),
};

apiCreator.init(`${__dirname}/api`, config, resources, app);
