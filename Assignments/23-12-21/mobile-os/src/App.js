import logo from './logo.svg';
import './App.css';
import { MakeList } from './components/MakeList';

function App() {
  let mOs = ["Android", "Iphone", "BlackBerry", "Microsoft Windows Phone"];
  let manufacturers=["Samsung","Apple","Microsoft","HTC"]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={100}/>
        {/* <h1>hello</h1> */}
        <h3>Mobile Operating System</h3>
        <ul className="list">
          {
            mOs.map(el =>  
              <MakeList name={el }/>
          )}
        </ul>
        <h3>Mobile Manufacturers</h3>
        <ul className="list1">
          {
            manufacturers.map(el => <li>{el}</li>)
         }
        </ul>
      </header>
    </div>
  );
}

export default App;
