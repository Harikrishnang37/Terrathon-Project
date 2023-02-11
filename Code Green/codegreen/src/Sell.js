import React, { useState } from 'react'
import axios  from 'axios'
import './Sell.css'

function Sell() {

  const [username, setusername] = useState("");
  const [productname, setprodname] = useState("");
  const [price, setprice] = useState("");
  const [rating, setrating] = useState("");

  function handleusername(event)
    {
        setusername(event.target.value)
       // console.log(event.target.value)
    }

    function handleprodname(event)
    {
        setprodname(event.target.value)
       // console.log(event.target.value)
    }
    function hanldeprice(event)
    {
        setprice(event.target.value)
       // console.log(event.target.value)
    }
    function handlerating(event)
    {
        setrating(event.target.value)
       // console.log(event.target.value)
    }

    async function handleSubmit(event)
    {
      axios.post('http://localhost:8000/products/add', {username: username, userid: 4, productname: productname, productid: 1, price: price, rating:rating, ImgURL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwebneel.com%2Fnature-photography-photos&psig=AOvVaw0_7bIl30JavNVaRVyrSto5&ust=1676173323358000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNiU563GjP0CFQAAAAAdAAAAABAE"});
      alert("product added");
    }


  return (
    <form className='form' onSubmit={handleSubmit}>
        <br/>
        <h2>Enter your username : </h2>
        <br/>
        <input type="text" value = {username} onChange = {handleusername}/>
        <br/>
        <h2>What are you planning to sell ?</h2>
        <br/>
        <textarea value = {productname} onChange = {handleprodname}>Enter here</textarea>
        <br/>
        <h2>Selling Price : </h2>
        <br/>
        <input type="number" value = {price} onChange = {hanldeprice}/>
        <br/>
        <h2>Rating : </h2>
        <br/>
        <input type="number" value = {rating} onChange = {handlerating}/>
        <br/>
        <button type='submit'>Submit</button>
        <br/>
    </form>
  )
}

export default Sell;