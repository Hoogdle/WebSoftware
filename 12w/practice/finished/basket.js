import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    Basket()
  );
}

function Basket(){
  const [num, setNum] = useState(0);
  const [total, setTotal] = useState(0);
  return(
    <>
      <h1>Simple Cart</h1>
      <br></br>
      <h3>Item A - $10</h3>
      <button type='button' onClick={ () => {setNum(num+1); setTotal(total+10)}}>
      Add to Cart
      </button>
      <h3>Item B - $15</h3>
      <button type='button' onClick={ () => {setNum(num+1); setTotal(total+15)}}>
      Add to Cart
      </button>
      <h3>Item C - $20</h3>
      <button type='button' onClick={ () => {setNum(num+1); setTotal(total+20)}}>
      Add to Cart
      </button>
      
      <h3> Total Items : {num}</h3>
      <h3> Total Cost : ${total}</h3>
    </>
  );
}
export default App;
