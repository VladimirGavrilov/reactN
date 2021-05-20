import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import st from './itogToVote.module.css'

function ItogToVote(props) {

    const contryEur = props.contry
    const cont = Object.values(contryEur)
    const listGrups = cont.filter((gr) => gr.length == 4)
    // debugger;
    const listGrup = listGrups.map(lGR => lGR.map((lgr) => (
        <button id={lgr.name_en} className={st.itogContry} onClick= {() => {alert(`${lgr.value}`)} } >         
                <h6>{lgr.name_ru} </h6>
        </button>
    )))
    return (
     <div>
        <h3>Выбери команду</h3>
        <div className={st.itogList}>{listGrup}</div>
     </div>
        
    )
}

export default ItogToVote;