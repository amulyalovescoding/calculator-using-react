import React from "react";

function Display(props) {
  let background = props.theme.display;
  return (
    <div>
      <h3
        className="cal-display p-5"
        style={{
          backgroundColor: background.screenBackground,
          color: background.screenTextColor,
          borderRadius: "5px",
          marginBottom: "1.6rem",
          marginTop: "1rem",
          fontSize: "32px",
        }}
      >
        {props.count}
      </h3>
    </div>
  );
}

export default Display;
