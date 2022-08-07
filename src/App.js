import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Weather app</p>

        <a
          className="App-link"
          href="https://github.com/dariaspytska/react-search"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>
      </header>
    </div>
  );
}

export default App;
