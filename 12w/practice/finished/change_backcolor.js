import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    ChangeBackColor()
  );
}

function ChangeBackColor(){
  const [color, setColor ] = useState("White");
  return(
    <>
      <h1>My favorite color is {color}!</h1>
      <button type='button' onClick={ () =>  {setColor("Blue"); helperChangeBackColor("Blue")}}>
      Blue
      </button>
      <button type='button' onClick={ () =>  {setColor("Red"); helperChangeBackColor("Red")}}>
      Red
      </button>
      <button type='button' onClick={ () =>  {setColor("Green"); helperChangeBackColor("Green")}}>
      Green
      </button>
      <button type='button' onClick={ () =>  {setColor("Black"); helperChangeBackColor("Black")}}>
      Black
      </button>
    </>
  );
}

function helperChangeBackColor(color){
  document.body.style.backgroundColor = color;
}
export default App;
