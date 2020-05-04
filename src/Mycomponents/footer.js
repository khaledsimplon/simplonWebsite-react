import React from 'react'
import './footer.css'
import Chart from'../Mycomponents/image/chart.png'

const Footer=()=>{
    return(
        <div class='footer'>
            <img src={Chart} id='logo-chart'/>
            <p class='paragraphe'>Simplon.co‌ ‌-‌ adresse:le 15, 15 avenue de Carthage ,tunis 1001‌-‌ ‌‌www.simplon.co‌ ‌ SAS‌ ‌ESUS‌ ‌au‌ ‌capital‌ ‌de‌ ‌138‌ ‌950‌ ‌euros‌ ‌-‌ ‌RCS‌ ‌Bobigny‌ ‌:‌ ‌792‌ ‌791‌ ‌329‌ ‌00016‌ ‌-‌ ‌Code‌ ‌APE‌ ‌8299Z‌ ‌ ‌ Agrément‌ ‌formation‌ ‌:‌ ‌ enregistrée‌ ‌sous‌ ‌le‌ ‌numéro‌ ‌11‌ ‌93‌ ‌06676‌ ‌93.‌ ‌Cet‌ ‌enregistrement‌ ‌ne‌ ‌vaut‌ ‌pas‌ ‌agrément‌ ‌de‌ ‌l’Etat.‌ ‌ ‌N°‌ ‌TVA‌ ‌:‌ ‌FR‌ ‌56‌ ‌79279132900016‌ ‌</p>
             <div class='all-icones'>
            <img class='icone' src='https://s18955.pcdn.co/wp-content/themes/sharethis-custom/assets/images/linkedinimg.png'/>
            <img class='icone' src='https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png'/>
            <img class='icone' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'/>
            </div>
        </div>
    );
}

export default Footer;