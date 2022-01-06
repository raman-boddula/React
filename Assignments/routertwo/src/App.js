import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { Settings } from "./components/setting";
import {Dashboard } from "./components/Dashboard";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<PrivateRoute ><Dashboard /></PrivateRoute> }></Route>
        
        <Route path="/settings" element={<PrivateRoute ><Settings /></PrivateRoute> }></Route>
        
        
      </Routes>
    </div>
  );
}

export default App;
