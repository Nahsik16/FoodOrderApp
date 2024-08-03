/* eslint-disable no-unused-vars */

import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { url,cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate =useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <React.Fragment key={item._id}> 
                <div key={item._id} className="cart-items-title  cart-items-item">
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item._id)}>X</p>
                </div>
                <hr />
              </React.Fragment>
            );
          }
        })}
      </div>
      <div className="car-bottom">
      <div className="cart-total">
        <h2>Cart Total</h2>
        <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>₹{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery detail</p>
            <p>₹{getTotalCartAmount()===0?0:40}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+ 40}</p>
          </div>
          </div>          
        <button onClick={()=>navigate('/order')}>Proceed to checkout</button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If u Have Promo code enter here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Enter Promo code" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
