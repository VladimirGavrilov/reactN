 import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import st from './itogToVote.module.css'


function ItogToVote(props) { 
    // debugger;
    const cont = Object.values(props.contry)
    const totalOutput = cont.map((con) => 
    <giv id={con.name_en}>
        <h5>{con.name_ru}</h5>
        <h6>Группа {con.grName}</h6>
        <p>Голосов {con.value}</p>
    </giv> )
    return(
        <div className={st.itogList}>
            <div>{totalOutput}</div>
        </div>
    )     
}

export default ItogToVote;