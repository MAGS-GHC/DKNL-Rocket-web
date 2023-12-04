const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let rocketSchema = new Schema({
  
  launch_id: { type: Number },
  start_latitude: { type: Number },
  start_longitude: { type: Number },
  end_longitude: { type: Number },
  end_latitude: { type: Number },
  start_angle: { type: Number },
  end_angle: { type: Number },
  //failed: { type: Boolean },
  altitude: { type: Number },
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
