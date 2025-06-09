import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis
} from "recharts";
 

function App() {

  const [id, setId] = useState();
  const [task,setTask] = useState();
  
  useEffect(() => {
    fetch('http://localhost:3001/todos')
      .then(res=>res.json())
      .then(data => setPeople(data))
      .catch(err=>console.error("Fetch error : ",err))
  }, []);


  
  
  return (
    <div>
      
    </div>
  );
}

export default App;
