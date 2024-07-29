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
    console.log("Error saving food:", error); 
    res.json({ success: false, message: "Error adding food" });
  }
};

//all food list
const listFood=async(req,res)=>{
  try{
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  }catch(error){
    console.log("Error getting food:", error);
    res.json({ success: false, message: "Error getting food" });
  }
}
//remove
const removeFood = async(req,res)=>{
  try{
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`,()=>{})
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"Food removed"});
  }
  catch(error){
    console.log("Error removing food:", error);
    res.json({ success: false, message: "Error removing food" });
  }
}

export { addFood,listFood,removeFood };