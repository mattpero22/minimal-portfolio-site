const Projects = (props) => {
    return (
        <div className="projects_page">

            <div className={`project bg_${props.theme}`} id="password_manager_app">
                <a className="project_thumb" href="https://p3protector.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img src={`./img/project_thumbnail/thumb_password.png`}></img>
                </a>
                <p className="project_desc">P3 Password Manager</p>
                <p className={`project_desc`}>
                    Password management app to encrypt and store a user's account information across multiple services. 
                    Features include user signup and optional two-factor authentication. <br />
                    <a href="https://github.com/mattpero22/pero_password_protector" target="_blank">
                        <img className="social_icon" src={`./img/github-logo-${props.theme}-theme.png`} alt='github'></img>
                    </a>
                </p>
                <p className={`project_desc bg_${props.theme}`}>
                    Python3 , Django
                </p>
            </div>

            <div className={`project bg_${props.theme}`} id="pokemon_auto_battler">
                <a className="project_thumb" href="https://mattpero22.github.io/pokemonAutoBattler/" target="_blank" rel="noreferrer">
                    <img src={`./img/project_thumbnail/thumb_pokemon.svg`}></img>
                </a>
                <p className="project_desc">Pokemon Auto Battler</p>
                <p className={`project_desc`}>
                    Pokemon-themed browser game with randomized team selection and battle, 
                    ensuring a different playthrough each time! Uses local storage to save previous game.<br />
                    <a href="https://github.com/mattpero22/pokemonAutoBattler" target="_blank">
                        <img className="social_icon" src={`./img/github-logo-${props.theme}-theme.png`} alt='github'></img>
                    </a>
                </p>
                <p className={`project_desc bg_${props.theme}`}>
                    HTML5, CSS3, JS, jQuery, PokeAPI
                </p>
            </div>

            <div className={`project bg_${props.theme}`} id="3dprint_manager_app">
                <a className="project_thumb" href="https://pebble-prints.herokuapp.com/home" target="_blank" rel="noreferrer">
                    <img src={`./img/project_thumbnail/thumb_3dprint.png`}></img>
                </a>
                <p className="project_desc">Pebble Prints</p>
                <p className={`project_desc`}>
                3D print tracker for hobbyist printers to identify print settings and successes of their prints.
                Offers full CRUD for a print in an easy to read format.<br />
                    <a href="https://github.com/mattpero22/3dPrintManager" target="_blank">
                        <img className="social_icon" src={`./img/github-logo-${props.theme}-theme.png`} alt='github'></img>
                    </a>
                </p>
                <p className={`project_desc bg_${props.theme}`}>
                    MongoDB, Express, Node, EJS
                </p>
            </div>

            <div className={`project bg_${props.theme}`} id="general_store_app">
                <a className="project_thumb" href="https://generalstoregs.netlify.app/" target="_blank" rel="noreferrer">
                    <img src={`./img/project_thumbnail/thumb_generalstore.png`}></img>
                </a>
                <p className="project_desc">General Store</p>
                <p className={`project_desc`}>
                General Storefront of random goods which offers viewing access for customers and CRUD functionality to admin accounts.
                 Worked collaboratively with 3 other software engineers using Slack and GitHub.
                  Primary role was lead backend design and defining user state in React. <br />
                    <a href="https://github.com/mattpero22/3dPrintManager" target="_blank">
                        <img className="social_icon" src={`./img/github-logo-${props.theme}-theme.png`} alt='github'></img>
                    </a>
                </p>
                <p className={`project_desc bg_${props.theme}`}>
                    MongoDB, Express, Node, React
                </p>
            </div>


            <div className="project" id="general_store_app">
                
            </div>
        </div>
    );
}

export default Projects;
