import React from 'react'
import "./Order.css"
import moment from "moment" // Library for passing Date Stamps

function Order({order}) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p> {/*Creating a Time Stamp for the Order*/} 
                {/*The Format show is the Way the date information will be shows in : First i Months and Years then Hours and Minutes in either am or pm*/} 
            
        </div>
    )
}

export default Order
