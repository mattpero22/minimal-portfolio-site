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
                <div id="about" className="tab" onClick={props.pageSelect}>ABOUT</div>
                <div id="projects" className="tab" onClick={props.pageSelect}>PROJECTS</div>
                <div id="skills" className="tab" onClick={props.pageSelect}>SKILLS</div>
                <div id="edu" className="tab" onClick={props.pageSelect}>EDUCATION</div>
            </div>
        </div>
    );
}

export default Header;