 import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import st from './itogToVote.module.css'

function ItogToVote(props) {      
    return(
        <div className={st.itogList}>
            <p>{props.contry.AUT.metr_ru}</p>
            Список с кнопками  и диограмами
        </div>
    )     
}

export default ItogToVote;