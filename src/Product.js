import React from 'react'
import "./Prodcut.css";
import StarRateIcon from '@material-ui/icons/StarRate';


function Product() {
    return (
        <div className ="prodcut">
            <div className ="product_info">
                <p> the lean startup </p>
                <p className ="product_price">
                    <small>$</small>
                    <strong>29</strong>
                </p>
                <div className ="product_rating">
                    <StarRateIcon/>
                    <StarRateIcon/>
                    <StarRateIcon/>
                </div>
            </div>

            <img src="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" alt="" />
            <button> Add to Basket </button>
        </div>
    )
}

export default Product
