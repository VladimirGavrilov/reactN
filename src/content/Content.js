import React from 'react';
import ReactDOM from 'react-dom';
import st from './Content.module.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
import TextListContent from './textListCont'
import ItogToVote from './itogToVote'


function Content(props){
    return (
    <div className={st.contentCentr}>
        <section>
            <div className={st.banner}>
                <img id="u528_img" src="./img/euro-uefa-696x418.jpg" alt="EURO2021" title="EURO2021"  />
            </div> 
            <div className={st.cards}>
                <Route exact path="/itogToVote" render={() => <TextListContent />} />
                <Route path="/howToVote" render={() => <ItogToVote />} />
            </div>                              
        </section>
    </div>
       
        )            
}
export default Content;