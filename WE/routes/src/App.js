import './App.css';
import { Route, Routes } from "react-router-dom";
import { Home } from './components/Home';
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Products } from "./components/Products"
import { Users } from "./components/Users";
import {UserDetails } from "./components/UserDetails";
function App() {
  return (
    <div className="App">
      <Navbar /><br></br>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contactus" element={<Contact />}></Route>
        <Route path="/products/:id/product/:name" element={<Products />}></Route>   
        <Route path="/users" element={<Users />}></Route>
        <Route path="/admin" element={<div>admin page</div>}></Route>
        <Route path="*" element={<div>404 not found</div>}></Route>
        <Route path="/users/:userid" element={<UserDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
