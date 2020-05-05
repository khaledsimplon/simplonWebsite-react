import React from 'react'
import developpeur from './image/developpeur.png'
import child from './image/child.png'
import world from './image/world.png'

import Card from './Card'
import Img from './Map'
import Block from'./Partenaires'
import Roumanie from './image/roumanie.png'
import Afrique from'./image/afrique du sud.png'
import Cote from'./image/cote d_ivoir.png'
import Tab from './Tab'
import Reg from './reglement'
import Slide from './slide'
import Footer from './footer'
import NavbarFinal from'../NAVBAR/navbarFinal'
function Acceuil() {
  let info=[{img:developpeur,n:"3224",cible:"simplonien.nes"},{img:child,n:"797",cible:"dont personnes autour du monde!"},{img:world,n:"90000",cible:"enfants sensibilisés"}]
  let table=[{year:'2014',country:Roumanie, name:'cluj,Roumanie'},{year:'2015',country:Afrique,name:'Johannesbourg, Afrique du sud'},{year:'2016', country:Cote, name:'Cote d ivoire Colombia'}]
  return (
    <div className="App">
    
    <Slide/>
    <Card contenu={info}/>
    <Img/>
    <Tab table={table}/>
    <Block/>
    <Reg/>
    
   
    </div>
  );
}

export default Acceuil;