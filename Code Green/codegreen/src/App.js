import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import Checkout from './Checkout';
import Howto from './Howto';
import Sell from './Sell';
import Payment from './Payment';
import Login from './Login Page/Login';



function App() {
  return (
      <div className="app">
      <Router>
      <Header />
        <Routes>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/checkout" element = {<Checkout/>}/>
          <Route path="/" element = {<Home/>}/>
          <Route path="/howto" element = {<Howto/>}/>
          <Route path="/sell" element = {<Sell/>}/>
          <Route path="/payment" element = {<Payment/>}/>
        </Routes>
      </Router>
      </div>
  );
}

export default App;
