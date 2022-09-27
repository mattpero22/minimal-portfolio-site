const Header = () => {
    return (
        <div id='header'>
            <h1 id='name'>MATT PERO</h1>
            <div id='header-tabs'>
                <a id='about' className='tab'>ABOUT</a>
                <a id='projects' className='tab'>PROJECTS</a>
                <a id='skills' className='tab'>SKILLS</a>
                <a id='education' className='tab'>EDUCATION</a>
            </div>
        </div>
    );
}

export default Header;