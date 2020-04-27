import React from 'react'
import Logo from '../logo.png'
import Orange from '../orange.png'
import Région from '../Région_ile-de-France_(logo).svg.png'
import'./Partenaires.css'

const Block=()=>{
    return(
      <div>
        <h2>Nos Partenaires</h2>
        <div class='Block'>
            <img class='logo' src={Logo} />
            <img class='logo'src={Orange}/>
            <img class='logo' src={Région}/>   
        </div>
      </div>
    )
}
export default Block;