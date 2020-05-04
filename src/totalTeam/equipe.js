import React from "react";

import Team from "./team";
import Tof1 from "./images/tof1.jpeg";
import Tof2 from "./images/tof2.jpg";
import Tof3 from "./images/tof3.jpeg";

const teamSimplon = [
  { name: "Mouna Ayari", poste: "Gérante", photo: Tof1 },
  { name: "Mohamed Hamza", poste: "Formateur", photo: Tof2 },
  { name: "Syrine Amy Auguste", poste: "Chef de fabrique", photo: Tof3 },
];
function Equipe() {
  return (
    <div className="equipe">
      <Team tab={teamSimplon} />
    </div>
  );
}

export default Equipe;
