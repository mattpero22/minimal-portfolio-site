const ThemeToggle = (props) => {
    const handleTheme = (event) => {
        event.target.className === "dark" ? props.setTheme("light") : props.setTheme("dark")
    }
    return (
        <img id="theme-toggle" className={props.theme} onClick={handleTheme} src={`./img/theme-toggle-${props.theme}-theme.png`} alt='about'></img>
    )
}

export default ThemeToggle;
