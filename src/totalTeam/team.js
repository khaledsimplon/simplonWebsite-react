import React from "react";
import Card from "./card";
import "./team.css";
import Tof4 from "./images/tof4.jpg";

function Team(props) {
  return (
    <div>
      <img src={Tof4} alt="descrip" />
      <div className="text">
        <div className="title">
          <h1>Equipe Simplon</h1>
        </div>
        <h3 className="descrip">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </h3>
      </div>
      <section className="cardTeamTotal">
        {props.tab.map((el) => (
          <Card el={el} />
        ))}
      </section>
    </div>
  );
}
export default Team;
