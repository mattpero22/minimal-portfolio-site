const Skills = (props) => {
    return (
        <div className="skills_page">
            <div className={`skills_section bg_${props.theme}`} id="languages">
                <h3>LANGUAGES</h3>
                <p>Python</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>SQL</p>
                <p>MATLAB</p>
                <p>C/C++</p>
            </div>
            <div className={`skills_section bg_${props.theme}`} id="libraries_and_frameworks">
                <h3>LIBRARIES AND FRAMEWORKS</h3>
                <p>React</p>
                <p>Node</p>
                <p>Express</p>
                <p>MongoDB</p>
                <p>jQuery</p>
                <p>pandas</p>
                <p>openpyxl</p>
                <p>matplotlib</p>
                <p>NumPy</p>
                <p>SciPy</p>
            </div>
            <div className={`skills_section bg_${props.theme}`} id="Software">
                <h3>Software</h3>
                <p>Command Line</p>
                <p>GitHub</p>
                <p>Heroku</p>
                <p>Netlify</p>
                <p>Microsoft Word</p>
                <p>Microsoft Excel</p>
                <p>Visual Studio Code</p>
                <p>PyCharm</p>
                <p>SolidWorks</p>
                <p>Fusion360</p>
            </div>
        </div>
    );
}

export default Skills;
