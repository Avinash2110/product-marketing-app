import React from 'react';
import "./Base.css"
import Navbar from "./Navbar";
import Footer from "./Footer";

const Base = (props) => {
  return (
    <div className="App">
      <Navbar/>
      {props.children}
      <Footer/>
    </div>
  );
}

export default Base;
