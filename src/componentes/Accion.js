import React from "react";
export default class Accion extends React.Component {
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
