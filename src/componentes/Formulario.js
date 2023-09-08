
import React from "react";
import Input from "./Input";
import Boton from "./Boton";

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      codigo: "123",
      nombre: "",
      docente: "",
      hsCatedras:"",
      notas: ""
    };
  }

  guardar() {
    const {codigo, nombre, docente, hsCatedras, notas} = this.state;
    //const msj = `la persona guardada es: ${codigo} - ${nombre}, ${docente} ,${hsCatedras} ,${notas} `;
    const datos ={codigo, nombre, docente, hsCatedras, notas}
    this.props.guardarDatos(datos)
  }

  render() {
    const { codigo, nombre, docente, hsCatedras, notas} = this.state;
    return (
      <div className="Formulario">
        Formulario
      
        <Input
          titulo="Codigo"
          valor={codigo}
          onChange={(valor) => this.setState({ codigo: valor })}
        />
        <Input require
          titulo="Nombres"
          valor={nombre}
          onChange={(valor) => this.setState({ nombre: valor })}
        />
         <Input
          titulo="Docente"
          valor={docente}
          onChange={(valor) => this.setState({ docente: valor })}
        />
        <Input
          titulo="hsCatedras"
          valor={hsCatedras}
          onChange={(valor) => this.setState({ hsCatedras: valor })}
        />
          <Input
          titulo="Notas"
          valor={notas}
          onChange={(valor) => this.setState({ notas: valor })}
        />
        <div className="botonContainer" style={{display:"flex",flexDirection:"row"}}>
          <Boton titulo="Eliminar" onClick={() => this.eliminar()} />
          <Boton titulo="Guardar" onClick={() => this.props.guardarDatos()} />
           <Boton titulo="+" onClick={() => this.mas()} />
        </div>
      </div>
    );
  }
}
