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
                    <Product  id = "4199"  
                    title = "The Lean Startup" 
                    price={29.99} 
                    image = "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" 
                    rating = {3}/>

                    <Product
                    id = "4139"
                    title ="The Founder's Dilemmas: Anticipating and Avoiding the Pitfalls That Can Sink a Startup"
                    image = "https://images-na.ssl-images-amazon.com/images/I/41qyfyCw3hL._SX329_BO1,204,203,200_.jpg"
                    price = {239.0}
                    rating = {5}
                    />
                    

                </div>

                <div className ="home_row">

                        <Product
                        id = "4010"
                        title ="RUNMUS Gaming Headset for PS4, Xbox One, PC Headset w/Surround Sound"
                        image = "https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SX522_.jpg"
                        price = {32.0}
                        rating = {5}
                        />

                        <Product
                        id = "4020"
                        title ="Jenga Classic Game"
                        image = "https://images-na.ssl-images-amazon.com/images/I/81OAWwX3djL._AC_SL1500_.jpg"
                        price = {89.99}
                        rating = {5}
                        />

                        <Product
                        id = "4030"
                        title ="WowWee Pinkfong Baby Shark Official Song Cube - Baby Shark"
                        image = "https://images-na.ssl-images-amazon.com/images/I/71X5Be5ZB7L._AC_SL1500_.jpg"
                        price = {11.99}
                        rating = {4}
                        />
                

                </div>

                <div className ="home_row">
                <Product
                    id = "4040"
                    title ="Alex Vando Mens Dress Shirts Regular Fit Long Sleeve Men Shirt"
                    image = "https://m.media-amazon.com/images/S/aplus-media/sc/fb249b00-7171-46cf-aba4-392c11af2185.__CR0,0,2500,2500_PT0_SX300_V1___.jpg"
                    price = {22.99}
                    rating = {4}
                    />
                   
                </div>
             </div>
        </div>
    )
}

export default Home
