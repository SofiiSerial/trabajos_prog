import React from "react";
import Accion from "./Accion";
export default class Boton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { titulo, onClick } = this.props;
    return (
      <span className="Boton" onClick={() => onClick()}>
        {titulo}
      </span>
    );
  }
}
