import React from "react";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Listado from "./componentes/Listado";

import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      materias: [],
    };
  }

  componentDidMount() {
    this.obtenerMaterias();
  }

  obtenerMaterias() {
    const url = "https://hd6v8q-3000.csb.app/api/materias/";

    axios
      .get(url)
      .then((resp) => {
        console.log(resp.data);
        this.setState({ materias: resp.data.materias });
        //escribir(//resp.data.materias);
        //resp.data.materias
      })
      .catch((error) => {
        console.log(error);
        alert("error");
      });
  }

  guardarDatos(datos) {
    const url = "https://hd6v8q-3000.csb.app/api/materias/";

    axios
      .post(url, datos)
      .then((resp) => {
        console.log(resp.data);
        alert("guardado");
        this.obtenerMaterias();
      })
      .catch((error) => {
        alert("ocurrio un error");
        console.log(error);
      });
  }
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <Formulario guardarDatos={(materia) => this.guardarDatos(materia)} />
        <Listado materias={this.state.materias} />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
