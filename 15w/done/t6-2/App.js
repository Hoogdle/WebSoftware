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
  const [search, setSearch] = useState('');
  const [age, setAge] = useState();
  useEffect(() => {
    fetch('http://localhost:3001/people')
      .then(res=>res.json())
      .then(data => setPeople(data))
      .catch(err=>console.error("Fetch error : ",err))
  }, []);

  const filtering = people.filter(people =>
    people.name.includes(search)
  )
  
  
  return (
    <div>
      <h1>
        Age of People (Horizontal Bar)
      </h1>
      <input id = "search" type = "text" placeholder='Search Name' value={search} onChange= {e => setSearch(e.target.value)}></input>
      
      <p>나이 {age} 이하</p><input  type = "range" onChange={e => setAge(e.target.value)} ></input>
      
      <BarChart layout="vertical" width = {600} height = {300} data = {people.filter(e => e.age < age).filter(e => e.name.includes(search))} >
        <XAxis dataKey="age" type='number'/>
        <YAxis dataKey="name" type="category"/>
        <Bar dataKey="age" fill='#82ca9d'/>
      </BarChart>
    </div>
  );
}

export default App;
