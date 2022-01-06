import { Navbar } from './components/Navbar';
import { Products } from "./components/Products";
import { Home } from "./components/Home";
import { ProductDetails } from "./components/ProductDetail";
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Error } from "./components/NotFound"

import "./components/Prod.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
                <Route path="*" element={<Error />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
