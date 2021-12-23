import logo from './logo.svg';
import './App.css';

function App() {
  return (


    <div className="App"> <h1>Hello React</h1>
      {[1, 2, 3, 4, 5].map(el =>  <h1>hello {el}</h1> )}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          <input style={{border:"5px solid green",padding:"20px"} } type="file" placeholder='upload here yours documents' />        </p>
        <button onClick={() => {
          alert("here you go")
        }}>Click me</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Tudos num="thanks"/ >
    </div>
  );
}
function Tudos({num}) { 
  return <h1>Test {num}</h1>
}

export default App;
