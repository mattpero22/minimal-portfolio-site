const Header = (props) => {
    return (
        <div className="header">
            <div className="name_title">
                <div id="home" className="fullname" onClick={props.pageSelect}>
                    <h1 id="home" className="name">MATT</h1>
                    <h1 id="home" className="name">PERO</h1>
                </div>
                <div className="title">
                    <h2>SOFTWARE ENGINEER</h2>
                </div>
            </div>
            <div className="header-tabs">
                <div id="about" className="tab">ABOUT</div>
                <div id="projects" className="tab">PROJECTS</div>
                <div id="skills" className="tab">SKILLS</div>
                <div id="education" className="tab">EDUCATION</div>
            </div>
        </div>
    );
}

export default Header;