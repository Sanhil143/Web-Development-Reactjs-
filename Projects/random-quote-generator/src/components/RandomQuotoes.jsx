import React, { useState } from 'react'
import './random.css'

const quotes = [
  "Quote 1",
  "Quote 2",
  "Quote 3",
  "Quote 4",
  "Quote 5",
  "Quote 6",
  "Quote 7",
  "Quote 8",
  "Quote 9",
  "Quote 10"
];


const RandomQuotoes = () => {
  const [ random, setRandom] = useState('');

  const generateRandom = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setRandom(quotes[randomIndex]);
  }
  return (
    <>
     <div className='container'>
     <h1>Random-Quote-Generator</h1>
     <button onClick={generateRandom}>Generate Quote</button>
     {random && <p style={{color:'red'}}>{random}</p>}
     </div> 
    </>
  )
}

export default RandomQuotoes
