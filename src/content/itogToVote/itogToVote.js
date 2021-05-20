import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import st from './itogToVote.module.css'

function ItogToVote(props) {

    const contryEur = props.contry
    const cont = Object.values(contryEur)
    const listGrups = cont.filter((gr) => gr.length == 4)
    let openModal = () => {alert(`Открыть`)}
    // debugger;
    const listGrup = listGrups.map(lGR => lGR.map((lgr) => (
        
        
        <div id={lgr.name_en} className={st.itogContry}  >
        <h6>{lgr.name_ru} </h6>
            <input type="number" step="10"/>
            <input type="submit" onClick= {openModal}/>
                
        </div>
    )))
    return (
     <div>
        <h3>Выбери команду</h3>
        <div className={st.itogList}>{listGrup}</div>
     </div>
        
    )
}

export default ItogToVote;