import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';


function Checkout() {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='left'>
            <div>
                <h2 className='title'>Your Basket</h2>
            {basket.map(item => (
                <CheckoutProduct
                title={item.title}
                image={item.image}
                price={item.price}
                />
            ))}
            </div>
        </div>
        <div className='right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout;