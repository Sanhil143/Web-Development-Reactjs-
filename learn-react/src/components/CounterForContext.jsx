import React, { useContext } from 'react'
import CounterContext from '../contexts/CounterContext'

const CounterForContext = () => {
      const counterContext = useContext(CounterContext)
  return (
    <div>
    <h3>Count is {counterContext.count}</h3>
      <button onClick={counterContext.setCount(counterContext.count + 1)}>Increment</button>
      <button onClick={counterContext.setCount(counterContext.count - 1)}>Increment</button>
      <button>Decrement</button>
    </div>
  )
}

export default CounterForContext
