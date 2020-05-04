import React from 'react'
import pdf from '../Mycomponents/image/reglement.pdf1.pdf'
import './reglement.css'


const Reg=()=>{
    return(
        <section class='section'>
            <h2>Notre réglement interieur</h2>
            <iframe src={pdf} class='iframe'></iframe>
        </section>
    );
}
export default Reg;