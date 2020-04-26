import React from "react";


function Adresse(props) {
    return (
        <div class="plus">


            <h2><a>{props.list.site}</a></h2>



            <h2> <a>{props.list.adresse}</a></h2>

            <h2><a href="instagram.com">{props.list.instagram}</a></h2>

            <h2><a href="facebook.com"> {props.list.facebook}</a>
            </h2>
            <h2> <a href="gmail.com"> {props.list.gmail}</a></h2>

        </div>
    );
}

export default Adresse;