const Socials = (props) => {
    return (
        <div id="socials">
            <div id="github" className="tab">
                <img className="social_icon" src={`./img/github-logo-${props.theme}-theme.png`}></img>
            </div>
            <div id="email" className="tab">linkedin</div>
            <div id="resume" className="tab">resume</div>
            <div id="email" className="tab">email</div>
        </div>
    );
}

export default Socials;