import React from "react";

function Buttons(props) {
  return (
    <button
      className={props.colm}
      value={props.value}
      id={props.id}
      onClick={props.onClick}
      style={{ color: props.color, backgroundColor: props.backgroundColor }}
    >
      {props.value}
    </button>
  );
}

export default Buttons;
