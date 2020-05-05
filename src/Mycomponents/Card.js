import React from 'react'
import './cardstyle.css'

const Card=(props)=>{
    return(
         <div id="impact" class="notreImpact">
             <h2>Notre impact</h2>
        <div class='card'>
            {props.contenu.map(el=>
             <div class='card-body' >
              <img src={el.img} alt='logo' class='logo'/>
              <h4 class='title'>{el.n}</h4>
               <p>{el.cible}</p>


             </div>
            
            )}
        </div>
        </div>

    );
}

export default Card;