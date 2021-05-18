import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';
import './App.css';
import {Treemap} from "d3plus-react";

// function listContry() {       
//     return dataContry.filter(item => item.grName != "Z")    
// }
// const d2 = []
// const uefaConr =  dataContry.filter( (cnt) => {

// }

// )


// const methods = {
//   groupBy: "id",
//   data: uefaConr,
//   size: d => d.value
// };
function App(props){ 
  //  debugger;
   return( 
    
    <BrowserRouter>
      <div className="wrapper">
         <Header textBottom={props.state.textListCont}/>
                {/* <Content/>
                <Footer />
                <Treemap />  */}
                  
         <h1>s</h1>
      </div>
    </BrowserRouter>       
      )
}
export default App;
