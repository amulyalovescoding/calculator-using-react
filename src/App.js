import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Calculator from "./components/Calculator/Calculator";
import React, { useState } from "react";

function App(props) {
  let mode1 = {
    mainBackgroundColor: "hsl(222, 26%, 31%)",
    togglerBackground: "hsl(223, 31%, 20%)",
    header: {
      color: "hsl(0, 0%, 100%)",
    },
    keypad: {
      keypadBackground: "hsl(223, 31%, 20%)",
      color: "hsl(221, 14%, 31%)",
      specialKeys: {
        background: "hsl(225, 21%, 49%)",
        shadow: "hsl(224, 28%, 35%)",
      },
      equalKey: {
        background: "hsl(6, 63%, 50%)",
        shadow: "hsl(6, 70%, 34%)",
      },
      numericKeys: {
        background: "hsl(30, 25%, 89%)",
        shadow: "hsl(28, 16%, 65%)",
      },
    },
    display: {
      screenBackground: "hsl(224, 36%, 15%)",
      screenTextColor: "hsl(0, 0%, 100%)",
    },
  };

  let mode2 = {
    mainBackgroundColor: "hsl(0, 0%, 90%)",
    togglerBackground: "hsl(0, 5%, 81%)",
    header: {
      color: "hsl(221, 14%, 31%)",
    },
    keypad: {
      keypadBackground: "hsl(0, 5%, 81%)",
      color: "hsl(221, 14%, 31%)",
      specialKeys: {
        background: "hsl(185, 42%, 37%)",
        shadow: "hsl(185, 58%, 25%)",
      },
      equalKey: {
        background: "hsl(25, 98%, 40%)",
        shadow: "hsl(25, 99%, 27%)",
      },
      numericKeys: {
        background: "hsl(45, 7%, 89%)",
        shadow: "hsl(35, 11%, 61%)",
      },
    },
    display: {
      screenBackground: "hsl(0, 0%, 93%)",
      screenTextColor: "hsl(221, 14%, 31%)",
    },
  };

  let mode3 = {
    mainBackgroundColor: "hsl(268, 75%, 9%)",
    togglerBackground: "hsl(268, 71%, 12%)",
    header: {
      color: "hsl(52, 100%, 62%)",
    },
    keypad: {
      keypadBackground: "hsl(268, 71%, 12%)",
      color: "hsl(52, 100%, 62%)",
      specialKeys: {
        background: "hsl(281, 89%, 26%)",
        shadow: "hsl(285, 91%, 52%)",
      },
      equalKey: {
        background: "hsl(176, 100%, 44%)",
        shadow: "hsl(177, 92%, 70%)",
      },
      numericKeys: {
        background: "hsl(268, 47%, 21%)",
        shadow: "hsl(290, 70%, 36%)",
      },
    },
    display: {
      screenBackground: "hsl(268, 71%, 12%)",
      screenTextColor: "hsl(52, 100%, 62%)",
    },
  };

  const [mode, setMode] = useState(mode1);

  const changeTheme = (event) => {
    if (event.target.id === "toggle-button1") {
      setMode(mode1);
      document.body.style.background = mode1.mainBackgroundColor;
    } else if (event.target.id === "toggle-button2") {
      setMode(mode2);
      document.body.style.background = mode2.mainBackgroundColor;
    } else {
      setMode(mode3);
      document.body.style.background = mode3.mainBackgroundColor;
    }
  };
  return (
    <div className="App">
      <div className="container calculator-container px-lg-5 pt-0" /*style={{ maxWidth: "40vw" }}*/>
        <Header
          theme={mode}
          changeTheme={changeTheme}
          togglerBackground={mode.togglerBackground}
        />
        <Calculator theme={mode} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
