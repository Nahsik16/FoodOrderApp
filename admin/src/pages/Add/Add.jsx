/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import '../Add/Add.css'
import { assets, url } from '../../assets/assets'
const Add = () => {
  const [image,setImage] =useState(false);
  const[data,setData]= useState({
    name:"",
    description:"", 
    price:"",
    category:"Salad"
  })
  const onChangeHandler =(event)=>{
    const name= event.target.name;
    const value =event.target.value;
    setData(data=>({...data,[name]:value}))
  }
 /* useEffect(()=>{
    console.log(data);
  },[data])*/
  return (
    <div className='add'>
      <form className='flex-col'>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
          </div>
          <div>
            <div className="add-product-name flex-col">
              <p>Name</p>
              <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' required />
            </div>

            <div className="add-product-description flex-col">
              <p>Description</p>
              <textarea onChange={onChangeHandler} value={data.description} name='description' rows="6" placeholder='Write content here' required />
            </div>

            <div className="add-category-price ">
              <div className='add-category flex-col'>
              <p>Category</p>
              <select onChange={onChangeHandler} value={data.category} name="category" id="category" required>
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
              </div>
            <div className="add-price flex-col">
              <p>Price</p>
              <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='₹20' required />
            </div> 
            
        </div>
   <button type='submit' className='add-button'>Add</button>
      </div>
      </form>
    </div>
  )
}

export default Add