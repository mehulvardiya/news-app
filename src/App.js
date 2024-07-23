import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";

const App = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#e0e0e0a3";
    }
  };

  const pageSize = 16;

  return (
    <div>
      <Router>
        <NavBar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/" element={<News mode={mode} key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/business" element={<News mode={mode} key="business" pageSize={pageSize} country="in" category="business"/>}/>
          <Route exact path="/entertainment" element={<News  mode={mode} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
          <Route exact path="/general" element={<News mode={mode} key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/health" element={<News mode={mode} key="health" pageSize={pageSize} country="in" category="health"/>}/>
          <Route exact path="/science" element={<News mode={mode} key="science" pageSize={pageSize} country="in" category="science"/>}/>
          <Route exact path="/sports" element={<News mode={mode} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
          <Route exact path="/technology" element={<News mode={mode} key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
