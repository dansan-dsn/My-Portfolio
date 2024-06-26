const express = require("express");
const router = express.Router();
const collection = require("../model/model");

router.post("/contact-us", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
      category: req.body.category,
    };

    const result = await collection.insertMany(data);
    res.status(201).json({ message: "data inserted", result: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await collection.findOneAndUpdate(id);
    if (!user) res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "user successfully updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
