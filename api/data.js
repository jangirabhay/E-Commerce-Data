const express = require("express");
const router = express.Router();
const { Macbook, Mobile } = require("../modules/UserData");

// this for MacBook-------------------------------------------
router.get("/getAllMacbook", async (req, res) => {
  try {
    const data = await Macbook.find({});
    if (!data) return res.status(404).json("No MacBook Data is here");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/macbook/:model", async (req, res) => {
  try {
const data = await Macbook.find({ Model_Name: req.params.model });
    if (!data) return res.status(404).json("Not Found");
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/addMacbook", async (req, res) => {
  try {
    const check = await Macbook.findOne({id : req.params.id});
    if(check) return res.status(409).json({message : "this data already exist",check});
    const newData = new Macbook(req.body);
    const saveUser = newData.save();
    return res.status(201).json("User add successfully", saveUser);
  } catch (error) {
    console.log("Error ", error);
    res.status(500).json({ error: error.message });
  }
});

router.delete("/deleteMacbook/:id", async (req, res) => {
  try {
    const data = await Macbook.findByIdAndDelete(req.params.id);
    res.json({ message: "Data was deleted", data });
  } catch (error) {
    res.state(404).json({ message: "File not found" });
  }
});

// this for Mobile --------------------------------------

router.get("/getAllMobile", async (req, res) => {
  try {
    const data = await Mobile.find({});
    if (!data)
      return res.status(404).json({ message: "No Mobile Data is here" });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/mobile/:model", async (req, res) => {
  try {
    const data = await Mobile.find({ model: req.params.model });
    if (!data) return res.status(404).json({ message: "data not found" });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

router.post("/addMobile", async (req, res) => {
  try {
    const check = await Mobile.findOne({id : req.params.id});
    if(check) return res.status(409).json({message : "this data already exist"});
    const newMobile = await Mobile(req.body);
    const saveMobile = newMobile.save();
    res
      .status(201)
      .json({ Message: "Mobile details add successfully", saveMobile });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

router.delete("/deleteMobile/:id", async (req, res) => {
  try {
    const deleteData = await Mobile.findByIdAndDelete(req.params.id);
    if (!deleteData) return res.status(404).json({ Message: "File not found" });
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});
module.exports = router;
