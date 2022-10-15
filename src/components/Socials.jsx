const Socials = (props) => {
    return (
        <div id="socials">
            <div id="github" className="tab">
                <a href="https://github.com/mattpero22" target="_blank" rel="noreferrer">
                    <img className="social_icon" src={`./img/github-logo-${props.theme}-theme.png`} alt='github'></img>
                </a>
            </div>
            <div id="linkedin" className="tab">
                <a href="https://www.linkedin.com/in/matthew-pero22/" target="_blank" rel="noreferrer">
                    <img className="social_icon" src={`./img/linkedin-logo-${props.theme}-theme.png`} alt='linkedin'></img>
                </a>
            </div>
            {/* <div id="email" className="tab">
                <a href="" target="_blank">
                    <img className="social_icon" src={`./img/email-logo-${props.theme}-theme.png`} alt='email'></img>
                </a>
            </div> */}
        </div>
    );
}

export default Socials;