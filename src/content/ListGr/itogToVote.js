 import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import dataText from '../../data/dataText.json';
import dataContry from '../../data/contry.json';
import TextListContent from './textListCont'
import dC2 from '../../data/contryValue.json';
import './ListGr.css'


function listGrup(parm) {       
    return dataContry.filter(item => item.grName === parm)    
}

const cntgrps = [
    listGrup("A"),
    listGrup("B"),
    listGrup("C"),
    listGrup("D"),
    listGrup("E"),
    listGrup("F")
 ]

function ItogToVote() {
    function lstCont(contr) {
    return(
        <li id = {contr.id_contry}>
        <p> {contr.name_ru}</p>
        <p>Голосов {contr.value}</p>
    </li>
    )
     
}
     const lstCntGrps = cntgrps.map((gr) =>
        <ul className="grCon">
        {
            gr.map( (contr) => lstCont(contr))
        }
        </ul>
      )      
    return (             
            <div>
               {lstCntGrps}
            </div>
        ) 
}

export default ItogToVote;