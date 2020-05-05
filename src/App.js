import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Aboutus from './About/About.js';
import NavbarFinal from './NAVBAR/navbarFinal'
import Acceuil from './Mycomponents/Acceuil';
import Equipe from './totalTeam/equipe'
import Footer from './Mycomponents/footer';
function App() {
  return (
    <div className="App">
      <NavbarFinal />
      <main>
      <Switch>
      <Route path='/aceuil'  component={Acceuil} />
      <Route path='/equipe'  component={Equipe} />
      <Route path='/apropos'  component={Aboutus} />
      </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
