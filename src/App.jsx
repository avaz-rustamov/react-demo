import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Hello World</code>
          <h1>Samandar Abdulaxatov Epam Developer In Sha Alloh</h1>
        </p>
      </header>
    </div>
  );
}

export default App;
