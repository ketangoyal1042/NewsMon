import React, { Component } from 'react'

export default class Column extends Component {
  render() {
    let {colwrap} = this.props;
    let colval = `col-md-${colwrap} my-3`;
    return (
      <div className={colval}>{this.props.children}</div>
    );
  }
}
