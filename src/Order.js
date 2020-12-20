import React from 'react'
import "./Order.css"
import moment from "moment" // Library for passing Date Stamps
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'

function Order({order}) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p> {/*Creating a Time Stamp for the Order*/} 
                {/*The Format show is the Way the date information will be shows in : First i Months and Years then Hours and Minutes in either am or pm*/} 
            <p className="order_id">
                <small>{order.id}</small> {/*Renders out the Asscoiated Order Id */}
            </p>
            {order.data.basket?.map(item =>(// Maps through every single entry in the order , Then Returns there information via the CheckoutProduct
                <CheckoutProduct
                id ={item.id}
                title ={item.title}
                price ={item.price}
                rating = {item.rating}
                image = {item.image}

                />
            ))}
            <CurrencyFormat
            renderText={(value) =>(
                <>
                    <h3 className="order_total">
                        Order Total: {value}
                    </h3>
                </>
            )}
            decimalScale={2}
            value = {order.data.amount / 100} // The Reason this is here is that we pass the Amounts by its subunit so this is here to 
            displayType = {"text"}
            thousandSeperator={true}
            prefix={"$"}
            />
        </div>
    )
}

export default Order
