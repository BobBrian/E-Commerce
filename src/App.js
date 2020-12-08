
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Checkout from './Checkout';

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
      
      {/*Header- The Section is for the Files Created in the Header.js file which is for the HomePage*/}
      {/*The Header is Outside the Switch so that it renders regardless of what Route is being Used*/}
      <Header/>
      <Switch>
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
