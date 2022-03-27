import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";
import dictionary_heart from "./dictionary_heart.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <img
          src={dictionary_heart}
          alt="dictionary"
          className="topPhoto img-fluid"
        />
        <h1 className="appHeader">Dictionary</h1>
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
