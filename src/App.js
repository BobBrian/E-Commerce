
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    //BEM
    <div className="app">
      
      {/*Header- The Section is for the Files Created in the Header.js file which is for the HomePage*/}
      <Header/>
      <Home/>
      {/*Home Component */}
      {/* */}
    </div>
  );
}

export default App;
