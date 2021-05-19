import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';
import './App.css';
import {Treemap} from "d3plus-react";

function App(props){ 
  //  debugger;
   return(     
    <BrowserRouter>
    <div className="wrapper">
      <Header textBottom= {props.state.textListCont}/>
      <Content contry={props.state.contry} textContent={props.state.textListCont}/>
                {/* <Footer />
                <Treemap />  */}
      </div>
    </BrowserRouter>       
      )
}
export default App;
