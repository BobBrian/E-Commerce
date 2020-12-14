import React from 'react'
import "./Checkout.css";
import CheckoutProduct from  "./CheckoutProduct";
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";

function Checkout() {
    const[{basket, user}, disaptch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className='checkout_ad'
                 src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Promo/Desktop/Fuji_LP_Hero_HD_ZA_en_US.png" 
                 alt=""/>

                    <div className="checkout_title">
                                    <h2>Your Shopping Basket</h2>
                                    <h3>Hello , {user?.email}</h3>

                                    {basket.map(item =>(

                                            <CheckoutProduct
                                            id ={item.id}
                                            title ={item.title}
                                            price ={item.price}
                                            rating = {item.rating}
                                            image = {item.image}

                                            />
                                    ))}

              
            </div>

            </div>
            
            <div className="checkout_right">
                <Subtotal></Subtotal>


            </div>
        </div>
    )
}

export default Checkout
