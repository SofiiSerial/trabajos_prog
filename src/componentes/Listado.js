import React from "react";
import Tarjeta from "./Tarjeta";
export default class Listado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { titulo, onClick } = this.props;
    return <div className = "materias"> 
    <Tarjeta eliminar={()=>alert("eliminar materia")}/>
    </div>;
  }

}
