import React from 'react'
import "./Product.css";
import StarRateIcon from '@material-ui/icons/StarRate';


function Product({id, title, image, price , rating}) {
    return (
        <div className ="product">
            <div className ="product_info">
                <p> The Lean Start Up </p>
                <p className ="product_price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className ="product_rating">
                    <StarRateIcon/>
                </div>
            </div>

            <img src="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" alt="" />
            <button> Add to Basket </button>
        </div>
    )
}

export default Product
