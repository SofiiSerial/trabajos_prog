import React from "react";
export default class Accion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { titulo, onClick } = this.props;
    return (
      <span onClick={()=> onClick()} className="EliminarMateria equis"> {titulo} </span>
    );
  }

}
