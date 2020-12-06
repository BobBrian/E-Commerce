
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
      
      {/*Header- The Section is for the Files Created in the Header.js file which is for the HomePage*/}
     
      <Switch>
      <Route path ="/checkout">
            <Header/>
            <h1>WELCOME TO THE CHECKOUT PAGE BAYBEE</h1>
      </Route>
      <Route path ="/">
            <Header/>
            <Home/>
      </Route>


      </Switch>
      



    </div>

    </Router>



    
  );
}

export default App;
