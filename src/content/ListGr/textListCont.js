import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import dataText from '../../data/dataText.json';
import dataContry from '../../data/contry.json';

function TextListContent() {
    return (
        <div>
            <h2>Как проголосовать</h2>
                <p className='howToUse'>{dataText.howToUse}</p>
                <button> Проголосовать!</button>
        </div>  
    )
  }
  
export default TextListContent;
