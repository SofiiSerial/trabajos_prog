import React from "react";
import Accion from "./Accion";
export default class Boton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { materia , eliminar } = this.props;
    return (
      <div className="materia">
			<span>ID: <span className="dato">123133</span> </span>
			<span>Materia: <span className="dato">ingles</span>  </span>
			<span>Docente: <span className="dato">luci</span>  </span>
			<span>Horas Semanales: <span className="dato">2hs</span>  </span>

			<Accion  titulo=" &times;" onClick = {() => eliminar()}/>
			
    	</div>
    );
  }
}
