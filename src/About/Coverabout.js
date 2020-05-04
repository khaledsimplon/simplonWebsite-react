import React from "react";
import './Coverabout.css'
import video from'./img/video.mp4'
function Coverabout() {
  return(
    <section>
  <div className="Coverabout">
    <p>About-us</p>
  </div>
  <div className="videoIntro">
    <div class="text-intro">
    <p id="Qui-somme-nous" >Qui sommes-nous</p>
    <p id="Nous-sommes">Nous sommes un réseau de fabriques numériques et inclusives en France et à l’étranger</p>
    </div>
    <video width="500" height="240" controls>
  <source src={video} type="video/mp4"></source>
  </video>
  </div>
  </section>)
}
export default Coverabout;
