import logo from './logo.svg';
import './App.css';

import React, {useEffect, useState} from 'react';


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/stock')
      .then(res=>res.json())
      .then(data => setUsers(data))
      .catch(err=>console.error("Fetch error : ",err))
  }, []);


  const fun = (quantity) => {
    if(quantity>0){
      return quantity
    } else {
      return "Out of Stock"
    }
  }
  return (
    <div>
        <h1>
          Product Stock Viewer
        </h1>
        <ul id="list">
          {
            users.map( user=>(
              <li>{user.name} - {fun(user.quantity)}</li>
            )
            )
          }
        </ul>
    </div>
  );
}

export default App;
