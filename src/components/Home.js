import { ReactDOM } from "react";
import React from "react";
import '../App.css';

import {ContactMe, Profile,Projects,Footer} from "./index.js";
export  function Home(){

    return(
        
        <div className="Home container ">

            
           <div className="row">
            <Profile/>
           </div>
           <div className="row">
            <Projects/>
            </div>
           <div className="row"><ContactMe/></div>
           <hr/>
           <div className="row"> <Footer/></div>
           
           <a href="#top" className="top" aria-label="Back to top" title="Back to top">↑</a>
           
        
       
        </div>
    )
}