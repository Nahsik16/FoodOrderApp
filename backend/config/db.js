import mongoose from "mongoose";
export const connectDB= async()=>{
  await mongoose.connect('mongodb+srv://kishanwali16:verySecurePassword@cluster0.ldwnqqg.mongodb.net/food-order').then(()=>console.log("DB connected"));

}