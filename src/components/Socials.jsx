const Socials = (props) => {
    return (
        <div id="socials">
            <div id="github" className="tab">
                <img className="social_icon" src={`./img/github-logo-${props.theme}-theme.png`} alt='github'></img>
            </div>
            <div id="linkedin" className="tab">
                <img className="social_icon" src={`./img/linkedin-logo-${props.theme}-theme.png`} alt='linkedin'></img>
            </div>
            <div id="resume" className="tab">
                <img className="social_icon" src={`./img/resume-logo-${props.theme}-theme.png`} alt='resume'></img>
            </div>
            <div id="email" className="tab">
                <img className="social_icon" src={`./img/email-logo-${props.theme}-theme.png`} alt='email'></img>
            </div>
        </div>
    );
}

export default Socials;