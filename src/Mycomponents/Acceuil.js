import React from 'react'
import developpeur from './Mycomponents/image/developpeur.png'
import child from './Mycomponents/image/child.png'
import world from './Mycomponents/image/world.png'
import './App.css';
import Card from './Mycomponents/Card'
import Img from './Mycomponents/Map'
import Block from'./Mycomponents/Partenaires'
import Roumanie from './Mycomponents/image/roumanie.png'
import Afrique from'./Mycomponents/image/afrique du sud.png'
import Cote from'./Mycomponents/image/cote d_ivoir.png'
import Tab from './Mycomponents/Tab'
import Reg from './Mycomponents/reglement'
import Slide from './Mycomponents/slide'
import Footer from './Mycomponents/footer'
import NavbarFinal from'./NAVBAR/navbarFinal'
function Acceuil() {
  let info=[{img:developpeur,n:"3224",cible:"simplonien.nes"},{img:child,n:"797",cible:"dont personnes autour du monde!"},{img:world,n:"90000",cible:"enfants sensibilisés"}]
  let table=[{year:'2014',country:Roumanie, name:'cluj,Roumanie'},{year:'2015',country:Afrique,name:'Johannesbourg, Afrique du sud'},{year:'2016', country:Cote, name:'Cote d ivoire Colombia'}]
  return (
    <div className="App">
    <NavbarFinal/>
    <Slide/>
    <Card contenu={info}/>
    <Img/>
    <Tab table={table}/>
    <Block/>
    <Reg/>
    <Footer/>
   
    </div>
  );
}

export default Acceuil;