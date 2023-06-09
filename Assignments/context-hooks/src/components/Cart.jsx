import React from 'react'
import { useCart } from '../context/CartContext'

const Cart = () => {
      const cart = useCart();

      const total = cart.items.reduce((a,b) => a + b.price , 0)
  return (
    <div>
      <h2><u>Carts</u></h2>
      {
            cart && cart.items.map((item) => {
                  return(<li>
                        {item.name} - ₹{item.price}
                  </li>)
            })
      }
      <h5>Total Price:₹{total}</h5>
    </div>
  )
}

export default Cart
