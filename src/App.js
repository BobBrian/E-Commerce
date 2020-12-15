import React, {useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";




function App() {
  const[{}, dispatch] = useStateValue();

  useEffect(()=> {
    // this will only run once when the app component loads....
    // Similar to an If Stament but Dyanmic

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        // if the user is logged in / the user was logged in
        // SET_USER sends the users information into the DataLayer and once they log out they are removed form the DataLayer

        dispatch({
          type : 'SET_USER',
          user: authUser
        })
      } else{
        // the user is logged out
        dispatch({
          type : 'SET_USER',
          user: null
        })
      }
    })

  }, [])



  return (
    //BEM
   <Router>
     <div className="app">
       <Switch>
         <Route path="/login">
           <Login/>
         </Route>
         <Route path="/checkout">
           <Header/>
           <Checkout/>
         </Route>
         <Route path="/payment">
            <Header/>
              <Payment/>
         </Route>
         <Route path="/"> {/* If there Exist a Route that has not yet been defined then this is where it will go automatically*/}
           <Header/>
           <Home/>
         </Route>
       </Switch>
     </div>
   </Router>


    
  );
}

export default App;
