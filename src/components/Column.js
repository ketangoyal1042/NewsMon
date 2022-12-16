import React from 'react'

export default function Column (props) {
    let {colwrap} = props;
    let colval = `col-md-${colwrap} my-3`;
    return (
      <div className={colval}>{props.children}</div>
    );
  
}
