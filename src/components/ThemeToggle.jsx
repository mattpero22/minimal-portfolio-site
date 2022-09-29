import { useState } from "react";

const ThemeToggle = () => {

    const [ theme , setTheme ] = useState("dark")

    const handleTheme = (event) => {
        event.target.className === "dark" ? setTheme("light") : setTheme("dark")
    }

    return (
        <h1 className={theme} onClick={handleTheme}>{theme}</h1>
    )
}

export default ThemeToggle;
