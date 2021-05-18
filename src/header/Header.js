import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import st from  './Header.module.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
class Header  extends React.Component
{
    constructor(props){
      super(props)               
    }
    render(){      
        return (
          <header className={st.topHeder}>          
                <div className={st.topButtonHeder}>
                  <Link to="/howToVote">{this.props.bottomText2}</Link>
                </div>
                <div className={st.topButtonHeder}>
                  <Link to="/itogToVote">{this.props.bottomText1}</Link>
                </div>                 
          </header>
      );
  }
}    
export default Header;
