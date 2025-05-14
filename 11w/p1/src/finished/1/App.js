import logo from './logo.svg';
import './App.css';

function App() {
  const calTemp = (temp) => {if(temp<=18) return <ol>{temp}°C - Cold</ol>; else if(temp>18) return <ol>{temp}°C - Warm</ol>}
  const tempList = [12,25,18,30,5]
  const resultTemp = tempList.map(calTemp)

  return (
    <div className="App">
      <h1>Daily Temperature Report</h1>
        <ol>
          {resultTemp}
        </ol>
    </div>
  );
}

export default App;
