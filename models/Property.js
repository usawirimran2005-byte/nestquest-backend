const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: String, required: true },
    beds: { type: Number, required: true },
    baths: { type: Number, required: true },
    area: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, default: "House" },
    description: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);