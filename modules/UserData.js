const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    item_image: { type: [String] },
    Model_Name: { type: String, required: true, uniqued: true },
    model: { type: String, required: true },
    release_year: { type: String, required: true },
    best_for: { type: [String], required: true, uniqued: true },
    display: {
      size: { type: String, required: true },
      type: { type: String, required: true },
      resolution: { type: String, required: true },
      brightness: { type: String, required: true },
      refresh_rate: { type: String, required: true },
    },
    chip: {
      name: { type: String, required: true },
      cpu: { type: String, required: true },
      gpu_options: { type: [String], required: true },
      neural_engine: { type: String, required: true },
      memory_bandwidth: { type: String, required: true },
    },

    memory: { type: [String], required: true },
    storage: { type: [String], required: true },
    battery_life: { type: String, required: true },
    weight: { type: String, required: true },
    ports: { type: String, required: true },
    cooling: { type: String, required: true },
    price_approx: { type: String, required: true },
    Seller_Details: {
      Name: { type: String, required: true },
      Phone: { type: Number, required: true },
      Shop_Name: { type: String, required: true },
      Shop_Location: { type: String, required: true },
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Product", productSchema);
