import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

const Header = (props) => {

    const [menu, setMenu] = useState("hide_menu")
    const handleMenu = () => {
        menu === "hide_menu" ? setMenu("show_menu") : setMenu("hide_menu")
    }

    const menuTabsDiv = <div className={`menu_tabs bg_${props.theme} ${menu}`} onMouseLeave={handleMenu}>
                            <div id="about" className="tab" onClick={props.pageSelect}>ABOUT</div>
                            <div id="projects" className="tab" onClick={props.pageSelect}>PROJECTS</div>
                            <div id="skills" className="tab" onClick={props.pageSelect}>SKILLS</div>
                            <div id="edu" className="tab" onClick={props.pageSelect}>EDUCATION</div>
                        </div>

    return (
        <div className="header">
            <div className="name_title">
                <div id="home" className="fullname" onClick={props.pageSelect}>
                    <h1 id="home" className="name">MATT</h1>
                    <h1 id="home" className="name">PERO</h1>
                </div>
                <div>
                    <h2 className="title">SOFTWARE ENGINEER</h2>
                </div>
            </div>
            <div className="header_icons">
                <ThemeToggle theme={props.theme} setTheme={props.setTheme}> </ThemeToggle>
                <img className="menu_icon" onClick={handleMenu} src={`./img/menu-logo-${props.theme}-theme.png`}></img>
            </div>
            {menu === "show_menu" ? menuTabsDiv : <></>}
        </div>
    );
}

export default Header;