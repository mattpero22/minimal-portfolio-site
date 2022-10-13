//react hooks and npm packages
import React from "react";
import { useState } from "react";

//styles
import "./App.css";

//components
import Header from "./components/Header"
import Main from "./components/Main"
import ParticlesComponent from "./components/Particles";
import Socials from "./components/Socials";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {

  const [theme, setTheme] = useState("dark")

  const [fade, setFade] = useState("fade_in")

  const [page, setPage] = useState("home")
  const PAGES = ["home", "about", "projects", "skills", "edu"]
  const handlePageSelect = (event) => {
    PAGES.includes(event.target.id) ? setPage(event.target.id) : setPage("home")
  }

  return (
    <div className={`app ${theme}`}>
      <ParticlesComponent theme={theme}> </ParticlesComponent>
      <Header page={page} setPage={setPage} pages={PAGES} pageSelect={handlePageSelect}>  </Header>
      <ThemeToggle theme={theme} setTheme={setTheme}> </ThemeToggle>
      <Main theme={theme} page={page} setPage={setPage} pages={PAGES} pageSelect={handlePageSelect} fade={fade} setFade={setFade}> </Main>
      <Socials theme={theme}> </Socials>
    </div>
  )
};

export default App;
