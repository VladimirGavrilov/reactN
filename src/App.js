import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';
import dataText from './data/dataText.json';
import dataContry from './data/contry.json';
import dC2 from './data/contryValue.json';

import './App.css';
import {Treemap} from "d3plus-react";

// function listContry() {       
//     return dataContry.filter(item => item.grName != "Z")    
// }
const d2 = []
const uefaConr =  dC2


const d1 = [ {id: "Россия", value: 29},
    {id: "Англия",  value: 10}]


const methods = {
  groupBy: "id",
  data: uefaConr,
  size: d => d.value
};

console.log(d2);
function App(){
  return( 
         <BrowserRouter >
            <div className="wrapper">
                <Header bottomText2= {dataText.bottomText2} bottomText1= {dataText.bottomText1} />
                <Content/>
                <Footer dataText= {dataText.footerText} />
                <Treemap config={methods} />           
            </div>
         </BrowserRouter> 
      )

    }
export default App;
