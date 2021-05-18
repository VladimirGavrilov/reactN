import React from 'react';
import ReactDOM from 'react-dom';
import SvgWith from './SvgWith'
import './MapCont.css'




function MapCont(props) {
    const grConts = props.gr.map( (gr) => 
        <div id={gr.idGr}><h5>{gr.idGr}</h5><p>{gr.playC}</p></div>

    )    
    return (      
        <div id="conteinerMap">
            <h2>Карта Европы </h2>
            <h5> Группы по странам</h5>
            <div id="grContryMap">{grConts}</div>
            <div><SvgWith /></div>        
        </div>
    )
}

export default MapCont;