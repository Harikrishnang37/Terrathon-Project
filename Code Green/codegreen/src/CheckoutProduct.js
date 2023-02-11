import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({image, title, price}) 
{
    const [{basket}, dispatch] = useStateValue()
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            title: title,
        })

    }
  return 
  (
    <div className='checkoutProduct'>
        <img className='image' src={image}/>
        <div className='info'>
            <p className='title'>{title}
            </p>
            <p className='price'>
                <strong>{price}</strong>
            </p>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct;