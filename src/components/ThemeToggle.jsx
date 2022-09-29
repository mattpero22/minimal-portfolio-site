const ThemeToggle = (props) => {
    const handleTheme = (event) => {
        event.target.className === "dark" ? props.setTheme("light") : props.setTheme("dark")
        console.log(props.theme)
    }
    return (
        <button className={props.theme} onClick={handleTheme}> Change Theme </button>
    )
}

export default ThemeToggle;
