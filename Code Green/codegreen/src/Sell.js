import React from 'react'
import './Sell.css'

function Sell() {
  return (
    <div className='div'>
        <br/>
        <h2>Enter your username : </h2>
        <br/>
        <input type="text"/>
        <br/>
        <h2>What are you planning to sell ?</h2>
        <br/>
        <textarea>Enter here</textarea>
        <br/>
        <h2>Selling Price : </h2>
        <br/>
        <input type="number"/>
        <br/>
        <h2>Quantity : </h2>
        <br/>
        <input type="number"/>
        <br/>
        <button type='submit'>Submit</button>
        <br/>
    </div>
  )
}

export default Sell;