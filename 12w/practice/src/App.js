import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    PassWord()
  );
}

function PassWord(){
  const pw = "1234";
  const [type, setType] = useState("");
  const [show, setShow] = useState("Wrong Password");
  return(
    <>
      <h1>Enter PassWord</h1>
      <input type='password' value={type} onChange={ (input) => {setType(input.target.value); if(input.target.value == pw){setShow("Correct Password")} else(setShow("Wrong Password"));}}></input>
      <p>{show}</p>
    </>
  );
}
export default App;
