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
      ,nota: ""
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
          titulo="Codigo"
          valor={codigo}
          onChange={(valor) => this.setState({ : valor })}
        />
        <Input
          titulo="Nombres"
          valor={nombres}
          onChange={(valor) => this.setState({ nombres: valor })}
        />
         <Input
          titulo="Docente"
          valor={docente}
          onChange={(valor) => this.setState({ docente: valor })}
        />
        <Input
          titulo="Horas"
          valor={Horsa}
          onChange={(valor) => this.setState({ Horsa: valor })}
        />
        <Boton titulo="Guardar" onClick={() => this.guardar()} />
        <Boton titulo="EliminarTodo" onClick={() => this.eliminarTodo()} />
      </div>
    );
  }
}
