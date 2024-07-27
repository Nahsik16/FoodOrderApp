import foodModel from "../models/foodModel";
import fs from 'fs'

const addFood =async(req,res)=>{
  let image_filename =`${req.file.filename}`
  const food = new foodModel({
    name:req.body.name,
    price:req.body.price,
    description:req.body.description,
    image:image_filename,
    category:req.body.category
  })
  try{
   await food.save();
    res.json({success:true,message:"Food Added"})
  }catch(error){
    console.log(error)
    res.json({success:false,message:"error"})
  }
}
export {addFood}