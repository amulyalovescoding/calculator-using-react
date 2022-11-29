import React from "react";
import Buttons from "./Buttons";
import "../Calculator/Keypad.css";

function Keypad(props) {
  let keypadTheme = props.theme.keypad;
  return (
    <div
      className="container"
      style={{
        backgroundColor: keypadTheme.keypadBackground,
        borderRadius: "5px",
      }}
    >
      <div className="row keypad-row">
        <Buttons
          value="7"
          colm="numeric-button btn col-2"
          onClick={props.onClick}
          color={keypadTheme.color}
          backgroundColor={keypadTheme.numericKeys.background}
        />
        <Buttons
          value="8"
          colm="numeric-button btn col-2"
          onClick={props.onClick}
          color={keypadTheme.color}
          backgroundColor={keypadTheme.numericKeys.background}
        />
        <Buttons
          value="9"
          colm="numeric-button btn col-2"
          onClick={props.onClick}
          color={keypadTheme.color}
          backgroundColor={keypadTheme.numericKeys.background}
        />
        <Buttons
          value="DEL"
          colm="operator btn col-2"
          id="del"
          onClick={props.onClick}
          backgroundColor={keypadTheme.specialKeys.background}
        />
      </div>
      <div className="row keypad-row keypad-row keypad-row">
        <Buttons
          value="4"
          colm="numeric-button btn col-2"
          onClick={props.onClick}
          color={keypadTheme.color}
          backgroundColor={keypadTheme.numericKeys.background}
        />
        <Buttons
          value="5"
          colm="numeric-button btn col-2"
          onClick={props.onClick}
          color={keypadTheme.color}
          backgroundColor={keypadTheme.numericKeys.background}
        />
        <Buttons
          value="6"
          colm="numeric-button btn col-2"
          onClick={props.onClick}
          color={keypadTheme.color}
          backgroundColor={keypadTheme.numericKeys.background}
        />
        <Buttons
          value="+"
          colm="operator btn col-2"
          onClick={props.onClick}
          color={keypadTheme.color}
          backgroundColor={keypadTheme.numericKeys.background}
        />
      </div>
      <div className="row keypad-row">
        <Buttons
          value="1"
          colm="numeric-button btn col-2"
          onClick={props.onClick}
          color={keypadTheme.color}
          backgroundColor={keypadTheme.numericKeys.background}
        />
        <Buttons
          value="2"
          colm="numeric-button btn col-2"
          onClick={props.onClick}
          color={keypadTheme.color}
          backgroundColor={keypadTheme.numericKeys.background}
        />
        <Buttons
          value="3"
          colm="numeric-button btn col-2"
          onClick={props.onClick}
          color={keypadTheme.color}
          backgroundColor={keypadTheme.numericKeys.background}
        />
        <Buttons
          value="-"
          colm="operator btn col-2"
          onClick={props.onClick}
          color={keypadTheme.color}
          backgroundColor={keypadTheme.numericKeys.background}
        />
      </div>
      <div className="row keypad-row">
        <Buttons
          value="."
          colm="operator btn col-2"
          onClick={props.onClick}
          color={keypadTheme.color}
          backgroundColor={keypadTheme.numericKeys.background}
        />
        <Buttons
          value="0"
          colm="numeric-button btn col-2"
          onClick={props.onClick}
          color={keypadTheme.color}
          backgroundColor={keypadTheme.numericKeys.background}
        />
        <Buttons
          value="/"
          colm="operator btn col-2"
          onClick={props.onClick}
          color={keypadTheme.color}
          backgroundColor={keypadTheme.numericKeys.background}
        />
        <Buttons
          value="*"
          colm="operator btn col-2"
          onClick={props.onClick}
          color={keypadTheme.color}
          backgroundColor={keypadTheme.numericKeys.background}
        />
      </div>
      <div className="row keypad-row">
        <Buttons
          value="RESET"
          colm="btn col-5"
          id="reset-key"
          onClick={props.onClick}
          backgroundColor={keypadTheme.specialKeys.background}
        />
        <Buttons
          value="="
          colm="btn col-5"
          id="equals-key"
          onClick={props.onClick}
          backgroundColor={keypadTheme.equalKey.background}
        />
      </div>
    </div>
  );
}

export default Keypad;
