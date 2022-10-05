const ThemeToggle = (props) => {
    const handleTheme = (event) => {
        event.target.className === "dark" ? props.setTheme("light") : props.setTheme("dark")
    }
    return (
        <button id="theme_switch" className={props.theme} onClick={handleTheme}> Change Theme </button>
    )
}

export default ThemeToggle;
