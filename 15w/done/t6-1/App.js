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

  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/people')
      .then(res=>res.json())
      .then(data => setPeople(data))
      .catch(err=>console.error("Fetch error : ",err))
  }, []);

  
  
  return (
    <div>
      <h1>
        Age of People (Horizontal Bar)
      </h1>
      <BarChart layout="vertical" width = {600} height = {300} data = {people} >
        <XAxis dataKey="age" type='number'/>
        <YAxis dataKey="name" type="category"/>
        <Bar dataKey="age" fill='#82ca9d'/>
      </BarChart>
    </div>
  );
}

export default App;
