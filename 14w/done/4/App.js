import logo from './logo.svg';
import './App.css';

import React, {useEffect, useState} from 'react';


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/info')
      .then(res=>res.json())
      .then(data => setUsers(data))
      .catch(err=>console.error("Fetch error : ",err))
  }, []);


  const fun = (data) => {
    let result = 0;
    for(let i=0; i<data.length;++i){
      if(data[i].id != null) result++;
    }
    return result
  }

  const click = () => {
    document.getElementById('list').style.visibility = "visible"
  }
  return (
    <div>
        <h1>
          Notification Count
        </h1>
        <p>You have <button onClick = {click} color='transparent'>{fun(users)}</button> notifications</p>
        <ul style={{visibility: 'hidden'}} id ="list">
          {
            users.map(user => (
              <li>{user.message}</li>
            ))
          }
        </ul>
    </div>
  );
}

export default App;
