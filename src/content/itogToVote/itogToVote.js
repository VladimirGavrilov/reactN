import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import st from './itogToVote.module.css'
import NumericInput from 'react-numeric-input';

function ItogToVote(props) {

    const contryEur = props.contry;
    const cont = Object.values(contryEur);
    const listGrups = cont.filter((gr) => gr.length == 4);
    let buttonToVote = React.createRef();
    let toVote = () => {
        let toV = buttonToVote.value
        return alert(`${toV}`);
    }
  
    const listGrup = listGrups.map(lGR => lGR.map((lgr) => (
        
     
        <div id={lgr.name_en} className={st.itogContry}  >
            <h6>{lgr.name_ru} > {lgr.value} голосов</h6>
            <div class="progress">
                <progress max="100000000000" value={lgr.value}></progress>
                <div class="progress-value"></div>
                <div class="progress-bg"><div class="progress-bar"></div></div>
            </div>

            <form>
                <NumericInput ref={buttonToVote} min={0} max={10000000} value={this.value || 10} />
                
            <input type="submit" onClick= {toVote}/>
            </form>
            
                
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