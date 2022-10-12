const Home = (props) => {
    return (
        <div id="page_tiles">
            <div className={`tile tile_${props.theme}`}>ABOUT</div>
            <div className={`tile tile_${props.theme}`}>PROJECTS</div>
            <div className={`tile tile_${props.theme}`}>SKILLS</div>
            <div className={`tile tile_${props.theme}`}>EDUCATION</div>
        </div>
    )
}

export default Home;
