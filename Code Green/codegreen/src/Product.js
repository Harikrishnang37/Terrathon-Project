import React from 'react'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useStateValue } from './StateProvider';

function Product({title, image, price, rating }) {
  const [{basket}, dispatch] = useStateValue()
  const addToBasket = () => {
      dispatch({
        type: 'ADD_TO_BASKET',
        item:{
          title:title,
          image:image,
          price:price,
          rating:rating,
        },
      })
  }
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='price'>
                <small><CurrencyRupeeIcon /></small>
                <strong>{price}</strong>
            </p>
            <div className='rating'>
                {Array(rating).fill().map((_, i)=>(<p><StarIcon /></p>))}
            </div>
        </div>
        <img className='image' src={image}/>
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product;