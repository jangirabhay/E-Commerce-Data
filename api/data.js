const express = require("express");
const router = express.Router();
const Product = require("../modules/UserData");

router.get("/getAll", async (req, res) => {
  try {
    const data = await Product.find({});
    if (!data) return res.status(404).json("Not Found");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:model", async (req, res) => {
  try {
    const data = await Product.find({ model: req.params.model });
    if (!data) return res.status(404).json("Not Found");
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/add", async (req, res) => {
  try {
    const newData = new Product(req.body);
    const saveUser = newData.save();
    return res.status(201).json("Product add successfully",saveUser);
  } catch (error) {
    console.log("Error ", error);
    res.status(500).json({ error: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const data = await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Data was deleted", data });
  } catch (error) {
    res.state(404).json({ message: "File not found" });
  }
});

module.exports = router;
