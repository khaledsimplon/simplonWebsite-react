import React from 'react';
import "./contact.css"


function Contact() {
    return (<section class="contact container" >
        <h1 >
            contact </h1>
        <form class="contact1 container">
            <div class="info1">
                <p>
                    <label for="name">Nom : </label>
                    <input type="text" id="name" autofocus required></input>
                </p>
                <p>
                    <label for="prenom">email : </label>
                    <input type="email" id="prenom" required></input>
                </p>
                <p>
                    <label for="email">pays : </label>
                    <input type="nom" id="email" required></input>
                </p>
            </div>
            <div class="info2">
                <p>
                    <label for="email">sujet : </label>
                    <input type="nom" id="email" required></input>
                </p>

                <textarea name="" id="" cols="30" rows="5">	message:</textarea>
                <p>
                    <input type="submit" value="Envoyer"></input>
                </p>
            </div>
        </form>



    </section>


    )
}
export default Contact;