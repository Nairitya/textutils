import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const changeAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    });
    setTimeout(() => setalert(null), 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#092040";
      changeAlert("Dark Mode has been enabled!!", "success")
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#ffffff";
      changeAlert("Dark Mode has been disabled!!", "success")
    }
  };
  return (
    <BrowserRouter>

      <Navbar title="TextEditor" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} changeAlert={changeAlert} />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Textform formHeading="Enter The Text To Edit: " mode={mode} changeAlert={changeAlert} />} />
          <Route exact path="/about" element={<About mode={mode} />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
