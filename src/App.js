import React from "react";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Listado from "./componentes/Listado";

import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        Formulario
        <div>
          <Header />
        </div>
        <Formulario />
        <Listado />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
