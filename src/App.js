import "./App.scss";
import Navigation from "./components/Navigation.js";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Intro />
      </header>
    </div>
  );
}

export default App;
