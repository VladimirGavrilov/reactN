import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import st from './textListCont.module.css'
// import dataText from '../../data/dataText.json';
// import dataContry from '../../data/contry.json';

function TextListContent(props) {
  // debugger;
    return (
      <div className={st.textListCont}>
            <h2>Как проголосовать</h2>
        <p>{props.textContent.howToUse}</p>
      </div>  
    )
  }
  
export default TextListContent;
