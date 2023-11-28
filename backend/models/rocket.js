const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let rocketSchema = new Schema({

  _id:      { type: Number },
  LaunchId: { type: Number },
  failed:   { type: Boolean },
  topheight:{ type: Number },
  topspeed: { type: Number },
  temperature: { type: Number },
});


module.exports = mongoose.model("rocket", rocketSchema);
