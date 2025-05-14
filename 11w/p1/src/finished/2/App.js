import logo from './logo.svg';
import './App.css';

function App() {

  const developers = [
    { name : "Alice", title : "Frontend Developer"},
    { name : "Bob", title : "React Developer"},
    { name : "Charlie", title : "Full Stack Developer"}
  ]

  function ResumeCard({name, title}) { 
    return(
      <div className="hi">
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    )
}

const result = developers.map(ResumeCard)

  return (
    <div className="App">
      <h1>All Developer</h1>
      {result}
    </div>
  );
}


export default App;
