import { useState } from "react";
import React from "react";
// import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#242943";
      showAlert("DarkMode is Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode is Enabled", "success");
    }
  };

  return (
    <div>
      {/* <Router> */}
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        {/* <Routes> */}
          {/* <Route exact path="/" element={<Textarea showAlert={showAlert} mode={mode} alert={alert} />}> */}
          <Textarea showAlert={showAlert} mode={mode} alert={alert} />
          {/* </Route>
          <Route exact path="/about" element={<About/>}>
            
          </Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
