const Home = (props) => {
    const pages = ["home", "about", "projects", "skills", "edu"]

    const handlePageSelect = (event) => {
        pages.includes(event.target.id) ? props.setPage(event.target.id) : props.setPage("home")
    }

    return (
        <div id="page_tiles">
            <div id="about" className={`tile tile_${props.theme}`} onClick={handlePageSelect}>
                <img id="about" className="tile_logo" src={`./img/about-logo-${props.theme}-theme.png`} alt='about'></img>
            </div>
            <div id="projects" className={`tile tile_${props.theme}`} onClick={handlePageSelect}>
                <img id="projects" className="tile_logo" src={`./img/projects-logo-${props.theme}-theme.png`} alt='about'></img>
            </div>
            <div id="skills" className={`tile tile_${props.theme}`} onClick={handlePageSelect}>
                <img id="skills" className="tile_logo" src={`./img/skills-logo-${props.theme}-theme.png`} alt='about'></img>
            </div>
            <div id="edu" className={`tile tile_${props.theme}`} onClick={handlePageSelect}>
            <img id="edu" className="tile_logo" src={`./img/edu-logo-${props.theme}-theme.png`} alt='about'></img>
            </div>
        </div>
    )
}

export default Home;
