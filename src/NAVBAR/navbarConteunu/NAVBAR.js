import React from "react";
import "./Navbar.css";
import logos from "../image/logos.svg"
import Afternavbar from "../afterNavbar/afterNavbar";

//array for drop down
const accueilDrop=["Presentation Génerale","Impact","Partenaire","Reglement Intérieur"]
const aproposDrop=["Notre mission","Notre Vision","Notre Valeur"]
function Navbar() {
  return (
    
    <section class="navbar">
      
     <div class="navbar-container">
      <div class="dropdown ">
        <button class="dropbtn navbar-element">accueil</button>
        <div class="dropdown-content">
  {   accueilDrop.map(el=><a href="#">{el}</a> )   }
          
        </div>
      </div>

      <a class="navbar-element" href=" ">
        Equipe
      </a>

      <img id="logo" src={logos} alt="logo"></img>

      <div class="dropdown">
        <button class="dropbtn navbar-element">Apropos</button>
        <div class="dropdown-content">
        {   aproposDrop.map(el=><a href="#">{el}</a> )   }
        </div>
      </div>
      
      <a class="navbar-element" href=" ">
        Contact
      </a>
    </div>


    <Afternavbar />
    </section>
   
   
  );
}

export default Navbar;
