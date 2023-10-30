const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemas = [
  {
    name: "Question",
    schema: new Schema({
      id: {
        type: String,
        unique: true,
      },
      language: String,
      group: String,
      local: String,
      foreign: String,
      foreignDisplay: String,
    }),
  },
];

module.exports = schemas;
