import React from 'react';
import "./contact.css"


function Contact() {
    return (<section class="contact container" >
        <h1 className="tete" >
            contact </h1>
        <form class="contact1 ">
            <div class="info1">
                <p>
                    <label className="lab" for="name">Nom : </label>
                    <input className="insert" type="text" id="name" autofocus required></input>
                </p>
                <p>
                    <label className="lab" for="prenom">email : </label>
                    <input className="insert" type="email" id="prenom" required></input>
                </p>
                <p>
                    <label className="lab" for="email">pays : </label>
                    <input className="insert" type="nom" id="email" required></input>
                </p>
            </div>
            <div class="info2">
                <p>
                    <label className="lab" for="email">sujet : </label>
                    <input className="insert" type="nom" id="email" required></input>
                </p>

                <textarea className="area" name="" id="" cols="30" rows="5">	message:</textarea>
                <p>
                    <input className="insert" type="submit" value="Envoyer"></input>
                </p>
            </div>
        </form>



    </section>


    )
}
export default Contact;