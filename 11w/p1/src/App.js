import logo from './logo.svg';
import './App.css';

function App() {

  
  const students = [
    {name : "Emma", major : "CS", gpa : 3.2, subjects : ["Algorithms","DB","AI"]},
    {name : "Liam", major : "SE", gpa : 3.8, subjects : ["React", "Node", "DevOps"]},
    {name : "Olivia", major : "IS", gpa : 4.0, subjects : ["UX", "Cloud", "Security"]},
    {name : "Noah", major : "DS", gpa : 2.8, subjects : ["Math", "Python","ML"]}
  ]


  function ArrangeStudents({name, major, gpa, subjects}){
    const status = gpa >= 3.7  ? "Excellent" : (gpa >=3.0 ? "Good" : "Needs Improvement")
      return(
        <div className='students'>
          <h2>{name}</h2>
          <p>Major : {major}</p>
          <p>GPA : {gpa}</p>
          <p>Subjects : {subjects}</p>
          <p>Status : {status}</p>
        </div>
      )
  }

  function SearchBest(students){
    let bestIndex = 0
    let best = 0.0
    for(let i=0; i<students.length; ++i){
      if(students[i].gpa > best){
        bestIndex = i
        best = students[i].gpa
      }
    }

    alert("Top Student: " + students[bestIndex].name + ", "+"GPA : "+students[bestIndex].gpa)
  }

  const result = students.map(ArrangeStudents)

  
  return (
    <div className="App">
      <h1>Status Profile</h1>
      <button onClick={()=>SearchBest(students)}>Show the Top Students</button>
      {result}
    </div>
  );
}


export default App;
