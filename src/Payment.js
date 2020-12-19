import React,{useState, useEffect} from 'react'
import "./Payment.css"
import { useStateValue } from './StateProvider';
import CheckoutProduct from  "./CheckoutProduct";
import { Link, useHistory } from 'react-router-dom';
import { CardElement,useStripe,useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import {db} from "./firebase";



function Payment() {


    const[{basket, user}, disaptch] = useStateValue();
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();
    const[error,setError] = useState(null);
    const[disabled,setDisabled] = useState(true);
    const [succeded,setSucceded] = useState(false);
    const [processing,setProcessing] = useState("");
    const[clientSecret,setClientSecret] = useState(true);

    useEffect(() => {
        // generates the stripe secret which allows us to charge a customer
        const getClientSecret = async () =>{
            const response = await axios({ // axios is a fetching library for Api's
                method: 'post',
                //Stripe expects a currency in currency subunits eg Dollars = Cents (subunit of Dollars)
                url: `/payments/create?total=${getBasketTotal(basket * 100)}`
            }); 
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();

    }, [basket] )

    console.log('THE SECRET IS >>>>', clientSecret)

    const handleSubmit = async (event) =>{
        // here is where all the fancy commands related to Stripe go
        event.preventDefault(); // prevents refreshing 
        setProcessing(true); // prevents the user from clicking the Buy button more than once
        // Below is the client seeker which is used to scan the card and find the user asscoiated with it

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }). then(({paymentIntent}) =>{
            // payementIntent = Payment Confirmation
            // the Code Below is to ensure that On the Payment Page when the Buy Now Button is clicked 
            // The Page both Transitions to the Order Page but also adds the Order Information
            // To the Firebase Cloud Firestore Where all the Information is stored.
            
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })


            setSucceded(true);
            setError(null)
            setProcessing(false)

            disaptch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })


    }
    const handleChange = e =>{

    }


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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment_pricecontainer">
                                <CurrencyFormat
                                renderText={(value) =>(
                                     /* Renders out the Text in the h3 tag*/
                                    <h3> Order Total: {value}</h3>
                                    
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}/* The Value Rendered out is then attached to the getBasketTotal,
                                 which is a Selector designed to add the values of prodcuts and spitout there total*/
                                displayType={"text"}
                                thousandSeperator={true}
                                prefix={"$"}       
                                />
                                <button disabled={processing || disabled||succeded}>
                                    <span>{processing ? <p>Processing</p>: "Buy Now"}</span>
                                    {/*The Purpose of this is to Disable the Buy button if the cart is empty*/}
                                </button>
                            </div>
                        </form>
                        

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
