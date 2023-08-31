import React from "react";
import Input from "./Input";
import Boton from "./Boton";

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      documento: "123",
      apellidos: "",
      nombres: ""
    };
  }

  guardar() {
    const { documento, apellidos, nombres } = this.state;
    const msj = `la persona guardada es: ${documento} - ${apellidos}, ${nombres} `;
    alert(msj);
  }

  render() {
    const { documento, apellidos, nombres } = this.state;
    return (
      <div className="Formulario">
        Formulario
        <Input
          titulo="Documento"
          valor={documento}
          onChange={(valor) => this.setState({ documento: valor })}
        />
        <Input
          titulo="Apellidos"
          valor={apellidos}
          onChange={(valor) => this.setState({ apellidos: valor })}
        />
        <Input
          titulo="Nombres"
          valor={nombres}
          onChange={(valor) => this.setState({ nombres: valor })}
        />
        <Input
          titulo="Nombres"
          valor={nombres}
          onChange={(valor) => this.setState({ nombres: valor })}
        />
        <Boton titulo="Guardar" onClick={() => this.guardar()} />
      </div>
    );
  }
}
