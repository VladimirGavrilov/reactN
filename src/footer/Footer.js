import React from 'react';
import ReactDOM from 'react-dom';
import "./Footer.css"

function Footer(props)  {
    return (
        <div className='footerBootom'>
            <span>{props.footerText}</span>
        </div>        
      );
}
export default Footer;