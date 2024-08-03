import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config.js'
//app config
const app = express()
const port = 4000
//middleware
app.use (express.json())
app.use(cors())
//db connection
connectDB();
//api routes
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.get("/",(req,res)=>{
  res.send("hello world")
})

app.listen(port,()=>{
  console.log(`server started on http://localhost:${port}`)
})
//mongodb+srv://kishanwali16:verySecurePassword@cluster0.ldwnqqg.mongodb.net/?