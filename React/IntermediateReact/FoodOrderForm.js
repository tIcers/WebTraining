import React, { useState } from "react";
import './FoodOrderForm.css'

function FoodOrderForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [order, setOrder] = useState('')

  const myStyles = {
    display:block,
    marginBottom:10
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Order Successful!\n Your order was ${order} \n Please show your confirmation number for pickup`)
  }
 
  return (

  <form onSubmit={handleSubmit}>
    <label for='name' className='form-label'>Name<input id="name" name="name" type="text" value={name} onChange={(e)=> setName(e.target.value)}/></label>
    <label for='phone'className='form-label'>Phone<input id="phone" name="phone" type="number"  value={phone}onChange={(e)=> setPhone(e.target.value)}/></label>
    <label for='address'className='form-label'>Address<input id="address" name='address' type='text'value={address}onChange={(e)=> setAddress(e.target.value)}/></label>
    <label for='order'className='form-label'>Order<input id="order" name='order' type="text" value={order}onChange={(e)=> setOrder(e.target.value)}/></label>
    <button type="submit" >Submit Order</button>
  </form>
  )
 }

export default FoodOrderForm;
