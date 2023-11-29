const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let rocketSchema = new Schema({
  _id: { type: Number },
  LaunchId: { type: Number },

  failed: { type: Boolean },
  topheight: { type: Number },
  topspeed: { type: Number },
  temperature: { type: Number },
  created_at: {
    type: Date,
    required: true,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

console.log("loaded rocket schema");

module.exports = mongoose.model("rocket", rocketSchema);
