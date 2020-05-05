import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="cardTeam">
      <img src={props.el.photo} alt=" team"></img>
      <h1>{props.el.name}</h1>
      <span>
        <h3>
          <i class="fas fa-angle-left left"></i>
          {props.el.poste}
          <i class="fas fa-angle-right right"></i>
        </h3>
      </span>
      <i class="fab fa-linkedin"></i>
      <i class="fas fa-envelope"></i>
    </div>
  );
}
export default Card;
