import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*
  titulo, valor, onchage
  */

  render() {
    const { titulo, valor, onChange } = this.props;
    return (
      <label>
        {titulo}
        <input
          placeholder={titulo}
          value={valor}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    );
  }
}
