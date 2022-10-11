const Header = () => {
    return (
        <div id='header'>
            <div id='name_title'>
                <div id='name'>
                    <h1 className='name'>MATT</h1>
                    <h1 className='name'>PERO</h1>
                </div>
                <div id='title'>
                    <h2>SOFTWARE ENGINEER</h2>
                </div>
            </div>
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