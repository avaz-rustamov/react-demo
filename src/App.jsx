import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>My first React App</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Hello World!</code>
        </p>
      </header>
    </div>
  );
}

export default App;
