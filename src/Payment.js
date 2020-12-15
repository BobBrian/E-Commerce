import React from 'react'
import "./Payment.css"
import { useStateValue } from './StateProvider';
import CheckoutProduct from  "./CheckoutProduct";
import { Link } from 'react-router-dom';




function Payment() {


    const[{basket, user}, disaptch] = useStateValue();
    


    return (
        <div className="payment">
            <div className= "payment_container">
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>
                {/*Payment Section - Delivery of Items */}
                <div className= "payment_section">
                    <div className= "payment_title">
                        <h3> Deilivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>123 React Line</p>
                        <p>Port Elizabeth , SA</p>

                    </div>

                </div  >
                {/*Payment Section - Review Items */}
                <div className= "payment_section">
                    <div className= "payment_title">
                            <h3> Review Items and Delivery </h3>
                    </div>
                    <div className= "payment_items">
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

                {/*Payemnt Section - Payment Method */}
                <div className= "payment_section">
                    <div className= "payment_title">
                            <h3> Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/*Where Stripe Magic goes - Use for Caluclating Actual Payments */} 
                        

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
