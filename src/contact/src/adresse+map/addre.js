import React from "react";


function Adresse(props) {
    return (
        <div class="plus">


            <h2 className="plus-liste"><a className='liste'>{props.list.site}</a></h2>



            <h2 className="plus-liste"> <a className='liste'>{props.list.adresse}</a></h2>

            <h2 className="plus-liste"><a className='liste' href="instagram.com">{props.list.instagram}</a></h2>

            <h2 className="plus-liste"><a className='liste' href="facebook.com"> {props.list.facebook}</a>
            </h2>
            <h2 className="plus-liste"> <a className='liste' href="gmail.com"> {props.list.gmail}</a></h2>

        </div>
    );
}

export default Adresse;