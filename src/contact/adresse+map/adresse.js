import React from 'react';
import Adresse from './addre';


const adresse = [
    { site: " E-mail:@simplon.com", logo: "https://je-communique.fr/wp-content/uploads/2019/01/klan-loup-instagram.png" },
    { adresse: "Adresse:le 15,avenue deCarthage,tunis 1001" },
    { instagram: "Instagram: @simplonco" },
    { facebook: " Facebook :simplon.co world" },
    { gmail: "international@simplon.co" }
];

function Admap(props) {
    return (

        <section class="adresse">
            <div class="map">
                <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.9146016459677!2d10.179277514828016!3d36.79659787560297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd354c9935675d%3A0x3efd6dcde3a5505f!2sSimplon%20Tunis!5e0!3m2!1sfr!2stn!4v1583875202818!5m2!1sfr!2stn" width="500" height="300" frameborder="0" allowfullscreen=""></iframe>

            </div>
            <div className="aa">
                {adresse.map((el) => (
                    <Adresse list={el} />
                ))}
            </div>
        </section>
    )
}
export default Admap;