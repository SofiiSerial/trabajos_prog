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

  obtenerMateria(){
    const url='https://hd6v8q-3000.csb.app/api/materias/'
  
    axios.get(url)
    .then((resp)=>{
    //escribir(//resp.data.materias);
      //resp.data.materias
    })
    .catch((error)=>{
  
    })
  }

  guardar(datos){
    const url='https://hd6v8q-3000.csb.app/api/materias/'
    
    axios.post(url, datos)
    .then((resp)=>{
      obtenerMateria()
    })
    .catch((error)=>{
      alert("ocurrio un error")
      console.log(error)
    })
  }
  render() {
    return (
     <div className="App">
     <div>
          <Header />
     </div>
          <Formulario guardarDatos ={() => this.guardar()}/>
          <Listado />
     <div>
          <Footer />
      </div>
      </div>
    );
  }
}
