const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let rocketSchema = new mongoose.Schema({
  _id: { type: Number },
  LaunchId: { type: Number },

  failed: { type: Boolean },
  topheight: { type: Number },
  topspeed: { type: Number },
  temperature: { type: Number },
  created_at: {
    type: Timestamp,
    required: true,
    default: new Date(),
  },
  updated_at: {
    type: Timestamp,
    required: true,
    default: new Date(),
  },
});

module.exports = mongoose.model("rocket", rocketSchema);
