const Home = (props) => {
    return (
        <div id="page_tiles">
            <div id="about" className={`tile bg_${props.theme}`} onClick={props.pageSelect}>
                <img id="about" className="tile_logo" src={`./img/about-logo-${props.theme}-theme.png`} alt='about'></img>
            </div>
            <div id="projects" className={`tile bg_${props.theme} preload`} onClick={props.pageSelect}>
                <img id="projects" className="tile_logo" src={`./img/projects-logo-${props.theme}-theme.png`} alt='projects'></img>
            </div>
            <div id="skills" className={`tile bg_${props.theme}`} onClick={props.pageSelect}>
                <img id="skills" className="tile_logo" src={`./img/skills-logo-${props.theme}-theme.png`} alt='skills'></img>
            </div>
            <div id="edu" className={`tile bg_${props.theme}`} onClick={props.pageSelect}>
            <img id="edu" className="tile_logo" src={`./img/edu-logo-${props.theme}-theme.png`} alt='education'></img>
            </div>
        </div>
    )
}

export default Home;
