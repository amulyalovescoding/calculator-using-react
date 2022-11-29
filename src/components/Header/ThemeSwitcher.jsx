import React from "react";
import "./ThemeSwitcher.css";
import Button from "./Buttons";

function ThemeSwitcher(props) {
  const clickHandler = (event) => {
    const buttons = document.querySelectorAll(".tri-state-toggle-button");
    buttons.forEach((element) => {
      element.classList.remove("active");
      document.getElementById(event.target.id).classList.add("active");
    });
    props.changeTheme(event);
  };

  return (
    <div
      className="tri-state-toggle"
      style={{ backgroundColor: props.togglerBackground }}
    >
      <Button
        className="btn tri-state-toggle-button active"
        id="toggle-button1"
        type="button"
        clickHandler={clickHandler}
        color={props.togglerColor}
      />
      <Button
        className="btn tri-state-toggle-button"
        id="toggle-button2"
        type="button"
        clickHandler={clickHandler}
        color={props.togglerColor}
      />
      <Button
        className="btn tri-state-toggle-button"
        id="toggle-button3"
        type="button"
        clickHandler={clickHandler}
        color={props.togglerColor}
      />
    </div>
  );
}

export default ThemeSwitcher;
