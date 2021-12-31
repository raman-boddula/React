import { Carousel } from 'antd';
import {contentStyle} from "./components/Button"
import React from 'react';
import './App.css';

function App() {

  return (
    <>
      <h1>carousel</h1>
        <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>image-1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>image-2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>image-3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>image-4</h3>
    </div>
  </Carousel>
    </>
  );
}

export default App;
