import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = React.useState({})

  React.useEffect(() => {
    fetch('http://localhost:8000/').then(res => res.json()).then(data => setMessage(data))
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{JSON.stringify(message)}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
