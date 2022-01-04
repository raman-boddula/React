import './App.css';
import { Navbar } from './components/Navbar';
import {Body} from "./components/Body"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Navbar />
        <Body></Body>
      </header>
    </div>
  );
}

export default App;
