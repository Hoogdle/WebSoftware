import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

 

function App() {

  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch('http://localhost:3001/jobs')
      .then(res=>res.json())
      .then(data => setJobs(data))
      .catch(err=>console.error("Fetch error : ",err))
  }, []);

  const filter_helper = jobs.filter(jobs =>
    jobs.title.includes(search)
  )
  
  return (
    <div>
      <h1>Job Board</h1>
      <input type='text' placeholder='Search job' value={search} onChange= {e => setSearch(e.target.value)}></input>
      <ol>
        {filter_helper.map(jobs => (
        <li>
            {jobs.title} at {jobs.company}
        </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
