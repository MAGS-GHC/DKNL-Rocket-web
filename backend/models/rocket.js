const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var autoIncrement = require("mongoose-auto-increment");

let rocketSchema = new Schema({
  LaunchId: { type: Number },
  failed: { type: Boolean },
  topheight: { type: Number },
  topspeed: { type: Number },
  temperature: { type: Number },
});

autoIncrement.initialize(mongoose.connection); // 3. initialize autoIncrement

rocketSchema.plugin(autoIncrement.plugin, "rocket");
module.exports = mongoose.model("rocket", rocketSchema);
