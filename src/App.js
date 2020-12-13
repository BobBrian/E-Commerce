import React, {useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const[{}, dispatch] = useStateValue();


  useEffect(()=> {
    // this will only run once when the app component loads....
    // Similar to an If Stament but Dyanmic

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        // if the user is logged in / was logged in

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

  }, [user,basket])



  return (
    //BEM
    <Router>
      <div className="app">
      
      {/*Header- The Section is for the Files Created in the Header.js file which is for the HomePage*/}
      {/*The Header is Outside the Switch so that it renders regardless of what Route is being Used*/}
      <Header/>
      <Switch>
      <Route path ="/login"> 
          <Login/>
      </Route>
      <Route path ="/checkout"> 
          <Checkout/>
      </Route>
      <Route path ="/">
            
            <Home/>
      </Route>
      </Switch>
      



    </div>

    </Router>



    
  );
}

export default App;
