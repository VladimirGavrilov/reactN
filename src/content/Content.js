import React from 'react';
import ReactDOM from 'react-dom';
import st from './Content.module.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
import TextListContent from './textListCont/textListCont'
import ItogToVote from './itogToVote/itogToVote'


function Content(props){
    
    return (
    <section className={st.contentCentr}>
            <div className={st.banner}>
                <img id="u528_img" src="./img/euro-uefa-696x418.jpg" alt="EURO2021" title="EURO2021"  />
            </div> 
            <div className={st.cards}>
                    <Route exact path="/howToVote" render={() => <TextListContent textContent={props.textContent}/>} />
                    <Route path="/itogToVote" render={() => <ItogToVote contry={props.contry} />} />
            </div>
    </section>
       
        )            
}
export default Content;