const Header = () => {
    return (
        <div id='header'>
            <h1 id='name'>MATT PERO</h1>
            <div id='header-tabs'>
                <div id='about' className='tab'>ABOUT</div>
                <div id='projects' className='tab'>PROJECTS</div>
                <div id='skills' className='tab'>SKILLS</div>
                <div id='education' className='tab'>EDUCATION</div>
            </div>
        </div>
    );
}

export default Header;