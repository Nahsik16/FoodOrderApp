
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";


//place order
const placeOrder =async (req,res) => {
  const frontend_url ="http://localhost:5173"
 try{
  const newOrder = new orderModel ({
    userId:req.body.userId,
    items:req.body.items,
    amount:req.body.amount,
    address:req.body.address
  }) 
  await newOrder.save();
  await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})
  const line_items = req.body.items.map((item) => {
    return {
      price_data:{
        currency:"inr",
        product_data:{
          name:item.name,
          images:[item.image]
        },
        unit_amount:item.price*100
      },
      quantity:item.quantity
    
    }
  })
  line_items.push({
    price_data:{
      currency:"inr",
      product_data:{
        name:"Delivery Charges"
      },
      unit_amount:4*100
    },
    quantity:1
  })
  /*const session =await Stripe.checkout.sessions.create({
    payment_method_types:['card'],
    line_items,
    mode:'payment',
    success_url:`${frontend_url}/order/success`,
    cancel_url:`${frontend_url}/order/cancel`
  })*/
  res.json({success:true,message:"payment"})
}catch(error){
  console.log(error)
  res.status(500).json({success:false,message:"internal server error"})
}
}
export{placeOrder}
