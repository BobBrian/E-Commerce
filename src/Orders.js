import React, { useState,useEffect } from 'react';
import { db } from './firebase';
import Order from './Order';
import './Orders.css'
import { useStateValue } from './StateProvider';


function Orders() {
    const [{basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    // when the app Loads
    useEffect(() => {
        if(user){ // Authentication to gaurd against users who access the system but are not signed in
            db
            .collection('users') // Accessing the users collection in the Cloud Firestore
            .doc(user?.uid) // Then we ge the speciifc user id that is logged in at that moment
            .collection('orders') // Then accessing the order database of that user
            .orderBy('created','desc') // Order all items inside the Order database based on the Date the enrty was created in a Descending Order
            .onSnapshot(snapshot =>(
                setOrders(snapshot.docs.map(docs =>({ // Set Order maps through the Order database and sets the allocated items into an Array
                    id: doc.id,
                    data: doc.data() // this stores all the info of the item (id,name,price,rating,image) and stores it in a Datakey
                })))
            ))
        }else{
            setOrders([])
        }
        
    }, [user])
    return (
        <div className="orders">
            <h1>Your Order</h1>

            <div className="orders_order">
                {/* Function below maps through all the orders and returns an order element */} 
                {orders?.map(order =>(
                    <Order order={order}/>
                ))}
            </div>
            
        </div>
    )
}

export default Orders
