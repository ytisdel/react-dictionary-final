import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Dictionary</h1>
        <main className="mt-3">
          <Dictionary />
        </main>
        <footer className="attribute mt-5">
          This App was coded by Lona Tisdel using <a href="/"> Github </a>
        </footer>
      </div>
    </div>
  );
}
