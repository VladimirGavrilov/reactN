import React from 'react';
import ReactDOM from 'react-dom';
import MapCont from './MapCont/Mapcont'
import dataText from '../data/dataText.json';
import dataContry from '../data/contry.json';
import gr from '../data/grCont.json';
import ListGr from './ListGr/ListGr';
import ListsGr from './ListGr/ListGr';
import st from './Content.module.css'
class Content extends React.Component{
    constructor(props){
        super(props)
        // this.state = {}
    }

    render(){
        return (
        <div className={st.contentCentr}>
            <section>
                {/* <div className={st.banner}>                     */}
                    <img id="u528_img" src="./img/euro-uefa-696x418.jpg" alt="EURO2021" title="EURO2021"  />
                {/* </div> */}
                <div className={st.cards}>                        
                    <div className={st.cardGruppa}><ListsGr dataText={dataText} dataContry= {dataContry}/></div>
                </div>
            </section>
            <MapCont gr={gr} />
        </div>
            

        )
    }
}


// function Content() {
//     console.log(typeof(dataContry))
    
   

export default Content;