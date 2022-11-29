import React from "react";
import ThemeSwitcher from "../Header/ThemeSwitcher";
// import "./Header.css"

function Header(props) {
  let headerColor = props.theme.header;
  return (
    <div className="row px-2" style={{ color: headerColor.color }}>
      <h1 className="col-6 pt-3 mb-0">calc</h1>
      <div className="col-6 row">
        <h2 className="col-6 pb-2">THEME</h2>
        <div className="col-6">
          <div className="row">
            <div className="col-4">1</div>
            <div className="col-4" style={{textAlign: "center"}}>2</div>
            <div className="col-4" style={{textAlign: "right"}}>3</div>
            <ThemeSwitcher
              theme={props.mode}
              changeTheme={props.changeTheme}
              togglerBackground={props.togglerBackground}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
