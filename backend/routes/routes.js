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

// router.put("/update", async (req, res) => {
//   try {
//     const { email } = req.body;
//     if (email) {
//       const data = await collection.findOneAndUpdate(id, req.body, {
//         new: true,
//       });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

module.exports = router;
