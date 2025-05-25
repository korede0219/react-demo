import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./PlayersList";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  const appStyle = {
    backgroundColor: darkMode ? "#1a1a1a" : "#f0f0f0",
    color: darkMode ? "#f0f0f0" : "#1a1a1a",
    minHeight: "100vh",
    transition: "all 0.3s ease"
  };

  document.documentElement.style.setProperty("--card-bg", darkMode ? "#2c2c2c" : "#ffffff");
  document.documentElement.style.setProperty("--text-color", darkMode ? "#f0f0f0" : "#000000");

  return (
    <div style={appStyle}>
      <div style={{ textAlign: "center", padding: "1rem" }}>
        <h1 style={{ fontFamily: "Arial", fontWeight: "bold" }}>Legends Gallery</h1>
        <label style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginTop: "1rem" }}>
          <span style={{ fontSize: "1rem" }}>Light</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleTheme}
            style={{ width: "40px", height: "20px" }}
          />
          <span style={{ fontSize: "1rem" }}>Dark</span>
        </label>
      </div>
      <PlayersList />
    </div>
  );
};

export default App;
