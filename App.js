import "./App.css";
import Button from "./components/button/Button";

function App() {
  return (
    <div>
      <Button>Primary</Button>
      <Button secondary>Secondary</Button>
      <div className="test">TEST</div>
    </div>
  );
}

export default App;
