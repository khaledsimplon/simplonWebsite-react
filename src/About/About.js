import React from "react";
import Coverabout from "./Coverabout.js";
import  Cardabout from "./Cardabout.js"
import "./About.css"
const Tab = [
  { image:"img", title:"Notre Mission", text:"Avec le soutien de la Fondation Société Générale et la Région Ile de France, Simplon Tunisie a lancé en Mars 2019 sa première fabrique Simplon Tunis au 15, au cœur du centre-ville de Tunis. Simplon Tunisie vise à développer un réseau d'écoles digitales, en propre et/ou en accompagnant des partenaires pour le faire, suivant le modèle de développement de simplon.co en France. ",
  class:"cardContainer1 cardContainer " },
  { image:"img", title:"Notre valeur", text:" Nous avons formé plus de 2000 apprenants aux métiers du numérique depuis 2013.Nous sommes une entreprise sociale et solidaire. Nous voulons faire du numérique un véritable levier d’inclusion et révéler des talents parmi des publics peu représentés dans le secteur.Nous conseillons les entreprises dans leur transformation digitale et parfois nous réalisons leurs sites et leurs applications.",
  class:"cardContainer2 cardContainer" },
  { image:"img", title:"Notre vision", text:"Le numérique est partout mais pourtant ce n’est pas toujours un langage naturel et inné. La fracture entre ceux qui le parlent et le manipulent avec aisance et les autres est toujours aussi vive. C’est pourquoi nous voulons mettre le code dans toutes les mains.",
  
  class:"cardContainer3 cardContainer" },
];

function Aboutus() {
  return (<div>
      <Coverabout />
      <div className="Cardabout-container">
      {Tab.map(el=><Cardabout Cardarray={el} />)}
      </div>
          </div>
                        )
                      

}

export default Aboutus;
