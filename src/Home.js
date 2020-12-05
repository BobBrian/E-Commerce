import React from 'react'
import Product from './Product'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <div className="home_container"> 
                <img
                className = "home_image"
                src = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg"
                alt =""
                />
                <div className ="home_row">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>

                </div>

                <div className ="home_row">
                <Product/>
                <Product/>

                </div>

                <div className ="home_row">
                <Product/>
                <Product/>
                <Product/>

                </div>
             </div>
        </div>
    )
}

export default Home
