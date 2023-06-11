import React from 'react'
import { useCart } from '../context/CartContext'

const Item = (props) => {
  const cart = useCart()
  return (
    <div className='items'>
      <h4>{props.name}</h4>
      <p>₹{props.price}</p>
      <button onClick={() => cart.setItems([...cart.items, {name:props.name, price:props.price}
      ])
      }
      >
      add to cart</button>
    </div>
  )
}

export default Item
//complete