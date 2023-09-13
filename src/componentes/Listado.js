import React from "react";
import Tarjeta from "./Tarjeta";
export default class Listado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { materias } = this.props;
    return (
      <div className="materias">
        {materias.map((materia, index) => {
          return (
            <Tarjeta
              key={index}
              datos={materia}
              eliminar={() => alert("eliminar materia")}
            />
          );
        })}
      </div>
    );
  }
}
