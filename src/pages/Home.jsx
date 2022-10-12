const Home = (props) => {
    return (
        <div id="page_tiles">
            <div className={`tile tile_${props.theme}`}>
                <img className="tile_logo" src={`./img/about-logo-${props.theme}-theme.png`} alt='about'></img>
            </div>
            <div className={`tile tile_${props.theme}`}>
                <img className="tile_logo" src={`./img/projects-logo-${props.theme}-theme.png`} alt='about'></img>
            </div>
            <div className={`tile tile_${props.theme}`}>
                <img className="tile_logo" src={`./img/skills-logo-${props.theme}-theme.png`} alt='about'></img>
            </div>
            <div className={`tile tile_${props.theme}`}>
            <img className="tile_logo" src={`./img/edu-logo-${props.theme}-theme.png`} alt='about'></img>
            </div>
        </div>
    )
}

export default Home;
