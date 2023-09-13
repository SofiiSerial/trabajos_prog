import React from "react";
import Accion from "./Accion";
export default class Boton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { eliminar } = this.props;
    const { nombre, docente, hsCatedras, codigo } = this.props.datos;
    return (
      <div className="materia">
        <span>
          ID: <span className="dato">{codigo}</span>
        </span>
        <span>
          Materia: <span className="dato">{nombre}</span>
        </span>
        <span>
          Docente: <span className="dato">{docente}</span>
        </span>
        <span>
          Horas Semanales: <span className="dato">{hsCatedras}</span>
        </span>

        <Accion titulo=" &times;" onClick={() => eliminar()} />
      </div>
    );
  }
}
