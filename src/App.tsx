import React from "react";
import Home from "./components/pages/home";
import { strings } from "data/strings";

const App = () => {
  const handleSpanishClick = () => {
    window.location.replace(`${window.location.origin}/es`);
  };
  const handleEnglishClick = () => {
    window.location.replace(`${window.location.origin}/en`);
  };
  const lang = window.location.pathname.substr(1, 2);
  return (
    <Home
      strings={lang === "es" ? strings.spanish : strings.english}
      handleSpanishClick={handleSpanishClick}
      handleEnglishClick={handleEnglishClick}
    />
  );
};

export default App;
