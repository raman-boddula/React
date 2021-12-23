import logo from './logo.svg';
import './App.css';

function App() {
  let mOs = ["Android", "Iphone", "BlackBerry", "Microsoft Windows Phone"];
  let manufacturers=["Samsung","Apple","Microsoft","HTC"]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={100}/>
        
        <h3>Mobile Operating System</h3>
        <ul className="list">
          {
            mOs.map(el =>  
              // <li>{el}</li>,
              <MakeList name={el }/>
          )}
        </ul>
        <h3>Mobile Manufacturers</h3>
        <ul className="list1">
          {
            manufacturers.map(el => <li>{el}</li>)
         }
        </ul>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}
function MakeList({name}) {
  return <li>{name}</li>
}
export default App;
