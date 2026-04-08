const mongoose = require("mongoose");

const macbookSchema = mongoose.Schema(
  {
    id : {type: Number,required: true},
    item_image: { type: [String] },
    Model_Name: { type: String, required: true, uniqued: true },
    category: { type: String, required: true },
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

const mobileSchema = mongoose.Schema(
  {
        id : {type: Number,required: true},
    model: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    release_date: { type: String, required: true },
    display: {
      size: { type: String, required: true },
      type: { type: [String], required: true },
      resolution: { type: String, required: true },
      refresh_rate: { type: [String], required: true },
    },
    image: { type: [String], required: true },
    processor: { type: String, required: true },
    ram: { type: [String], required: true },
    storage: { type: [String], required: true },
    camera: {
      rear: {
        main: { type: String, requred : true },
        ultraWide: { type: String },
        macro: { type: String },
        telphoto: { type: String },
        periscope_telephoto: { type: String },
      },
      front: { type: String, required: true },
    },
    battery: {
      capacity: { type: String, required: true },
      charging: { type: String, required: true },
    },
    os: { type: String, required: true },
    dimensions: {
      height: { type: String, required: true },
      width: { type: String, required: true },
      thickness: { type: String, required: true },
      weight: { type: String, required: true },
    },
    features: { type: [String], required: true },
    colors: { type: [String], requred: true },
    price : {type: String},
  },
  { timestamps: true },
);

const Macbook = mongoose.model("Macbook", macbookSchema);
const Mobile = mongoose.model("Mobile", mobileSchema);

module.exports = {
  Macbook,
  Mobile,
};
