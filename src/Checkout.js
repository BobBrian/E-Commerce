import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className='checkout_ad'
                 src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Promo/Desktop/Fuji_LP_Hero_HD_ZA_en_US.png" 
                 alt=""/>

            </div>
            <div className="checkout_title">
                <h2>Your Shopping Basket</h2>

                {/* Bakset Item */}
                {/* Bakset Item */}
                {/* Bakset Item */}
                {/* Bakset Item */}
                {/* Bakset Item */}

            </div>
            <div className="checkout_right">
                <Subtotal></Subtotal>


            </div>
        </div>
    )
}

export default Checkout
