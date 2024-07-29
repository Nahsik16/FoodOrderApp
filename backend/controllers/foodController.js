import foodModel from "../models/foodModel.js";
import fs from 'fs';

// Add food
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    image: image_filename
  });

  console.log("Food Object:", food); // Log the food object

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log("Error saving food:", error); // Log the error
    res.json({ success: false, message: "Error adding food" });
  }
};

export { addFood };