import React from 'react'
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import "./Subtotal.css";

function Subtotal() {

    const[{basket}, disaptch] = useStateValue();
    // the {value} variable in the p tags is so that the actually acummulated value is shown on the webpage

    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) =>(
                <>
                <p>
                    
                    Subtotal ({basket.length} items):
                    <strong>{value}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox"/> This Order contains a Gift
                </small>
                </>

            )}
            decimalScale={2}
            value = {getBasketTotal(basket)}
            displayType = {"text"}
            thousandSeperator={true}
            prefix={"$"}
            
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
