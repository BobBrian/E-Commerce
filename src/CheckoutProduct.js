import React from 'react'
import "./CheckoutProduct.css";
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating}) {

    //This Below is used to pull information to the basket or change infomation of the basket
    const[{basket}, disaptch] = useStateValue();
    
    const removeFromBasket = () =>{
        // removes items form the Basket
        disaptch ({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image}/>

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>
                    {title}
                </p>
                <p className='checkoutProduct_price'>
                    <small> $ </small>
                    <strong>{price}</strong>
                </p>
                <p className='checkoutProduct_rating'>
                {Array(rating)
                .fill()
                .map((_, i) => (

                    <StarRateIcon/>

                ))}
                </p>
                <button onClick={removeFromBasket}>Remove form Basket</button>

            </div>
            
        </div>
    )
}

export default CheckoutProduct
