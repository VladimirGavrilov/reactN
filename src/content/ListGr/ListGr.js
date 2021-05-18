import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import TextListContent from './textListCont'
import ItogToVote from './itogToVote'
import './ListGr.css'
 
function ListsGr(props) {
   
        return (          
            <div>
              <Route exact path="/itogToVote" render = {() => <TextListContent dataText={props.dataText} dataContry= {props.dataContry}/>} />
              <Route path="/howToVote" render = {() => <ItogToVote dataText={props.dataText} dataContry= {props.dataContry}/>} />
            </div>          
        )
   
}
export default ListsGr ;