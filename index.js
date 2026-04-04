require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();


app.use(cors());
app.use(express.json());
connectDB();
app.use("/macbook", require("./api/data"));
app.get("/", (req, res) => {
  res.json({ message: "API is running 🚀", status: "ok" });
});
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});