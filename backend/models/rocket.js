const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaOptions = {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
};

let rocketSchema = new Schema({
  _id: { type: Number },
  LaunchId: { type: Number },

  failed: { type: Boolean },
  topheight: { type: Number },
  topspeed: { type: Number },
  temperature: { type: Number },
  timestamps: true,
  schemaOptions,
});

module.exports = mongoose.model("rocket", rocketSchema);
