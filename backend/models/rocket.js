const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let rocketSchema = new Schema({
  
  launch_id: { type: Number },
  altitude: { type: Number }, 
  temperature: { type: Number },
  pressure: {type :Number },
  start_direction: {type: Number},
  end_direction: {type: Number},
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
