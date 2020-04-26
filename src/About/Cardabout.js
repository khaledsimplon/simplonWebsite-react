import React from "react";
import "./Cardabout.css"
function Cardabout(props) {
    return (
   
       <div className={props.Cardarray.class}>
           <h1 >{props.Cardarray.title}</h1>
           <p>{props.Cardarray.text}</p>
           </div>
   
    );

    
}
export default Cardabout;