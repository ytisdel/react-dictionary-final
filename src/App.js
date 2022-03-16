import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Dictionary App</h1>
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}
