import React from 'react'

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) =>(
                <>
                <p>
                    Subtotal ({basket.lenght} items):
                    <strong>0</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox"/> This Order contains a Gift
                </small>
                </>

            )}
            decimalScale={2}
            value = {0}
            displayType = {"text"}
            thousandSeperator={true}
            prefix={"$"}
            
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
