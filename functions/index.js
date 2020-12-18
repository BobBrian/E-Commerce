const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HyhOEE8lptNl1iZdFzzZPOLHN9VLCae6UscESMPS1x8M9DuOQCJ3wPRr3oemg6e5lVVqpcCGx9UUQYMImHZ584h00KWOdulAT')

// API set up

// App config
const app = express();
// Middlewares
app.use(cors({origin: true}));
app.use(express.json()); // Allows us to send data an pass it in the .json format

// API Routes
app.get('/',(request,response)=> response.status(200).send('hello world'))

app.get('/bob',(request,response)=> response.status(200).send('API BAYBEE'))

// Creating the End Point
app.post('/payments/create', async(requeset,response) =>{
    const total = requeset.query.total

    console.log('Thank You Youre Payment Request has been recieved for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount : total, // subunits of the currency
        currency: "usd",
    });
    // Creating the Response
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen Commands
exports.api = functions.https.onRequest(app)

//Local API End point
//http://localhost:5001/e-challenge2/us-central1/api