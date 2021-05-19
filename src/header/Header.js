import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import st from  './Header.module.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
function Header (props) {  
      // debugger;
        return (
          <header className={st.topHeder}>          
                <div className={st.topButtonHeder}>
              <Link to="/howToVote">{props.textBottom.bottomText1}</Link>
                </div>
                <div className={st.topButtonHeder}>
              <Link to="/itogToVote">{props.textBottom.bottomText2}</Link>
                </div>                 
          </header>
      );
 
}    
export default Header;
