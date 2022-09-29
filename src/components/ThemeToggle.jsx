const ThemeToggle = (props) => {
    const handleTheme = (event) => {
        event.target.className === "dark" ? props.setTheme("light") : props.setTheme("dark")
    }
    return (
        <button className={props.theme} onClick={handleTheme}> Change Theme </button>
    )
}

export default ThemeToggle;
