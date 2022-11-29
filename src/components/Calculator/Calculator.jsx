import React, { useState } from "react";
import Display from "./Display";
import Keypad from "./Keypad";

function Calculator(props) {
  const [display, setDisplay] = useState(0);
  const buttonClickHandle = (event) => {
    let currentValue = event.target.value;
    if (display === 0) {
      setDisplay(currentValue);
    } else {
      setDisplay((prev) => prev + "" + currentValue);
    }

    if (currentValue === "=") {
      let result = eval(display);
      setDisplay(result);
      console.log(result);
    } else if (currentValue === "RESET") {
      setDisplay(0);
    } else if (currentValue === "DEL") {
      let temp = display + "";
      if (temp.length > 1) {
        setDisplay(temp.substring(0, temp.length - 1));
      } else {
        setDisplay(0);
      }
    }
  };

  return (
    <div>
      <Display count={display} theme={props.theme} />
      <Keypad onClick={buttonClickHandle} theme={props.theme} />
    </div>
  );
}

export default Calculator;
