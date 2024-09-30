const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: String,
  status: String,
  height: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
});

const Userdb = mongoose.model("tdeedb", schema);

module.exports = Userdb;
