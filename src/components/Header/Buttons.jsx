import React from "react";

function Buttons(props) {
  return (
    <button
      className={props.className}
      id={props.id}
      type={props.type}
      onClick={props.clickHandler}
      backgroundColor={props.color}
    />
  );
}

export default Buttons;
