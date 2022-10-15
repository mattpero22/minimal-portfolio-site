const Edu = (props) => {
    return (
        <div className="edu_page">
            <div className={`education bg_${props.theme}`} id="NP">
                <div className="school_info">
                    <img className="school_logo" src="https://www.newpaltz.edu/media/web-assets/logos-images-and-icons/logo_transparent.png" alt="suny new paltz"></img>
                    <div className="edu_bullets">
                        <h2>SUNY NEW PALTZ</h2>
                        <h3>Bachelor of Science in Mechanical Engineering</h3>
                        <h4>August 2016 - May 2020</h4>
                    </div>
                    <div>
                        <ul className="edu_bullets">
                            <li>GPA: 3.30</li>
                            <li>Scholarship recipient</li>
                            <li>DIII Swim Team member (4 years)</li>
                            <li>DIII Swim Team captain (2 years)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`education bg_${props.theme}`} id="NP">
                <div className="school_info">
                    <img className="school_logo" src="https://seeklogo.com/images/G/general-assembly-logo-82F6D5B9DB-seeklogo.com.png" alt="general assembly"></img>
                    <div className="edu_bullets">
                        <h2>GENERAL ASSEMBLY</h2>
                        <h3>Software Engineering Immersive Bootcamp</h3>
                        <h4>April 2022 - July 2022</h4>
                    </div>
                    <div>
                        <ul className="edu_bullets">
                            <li>Full stack development bootcamp</li>
                            <li>400+ hour, accelerated pace course</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="education" id="GA"></div>
            <div className="education" id="Midwood"></div>
        </div>
    );
}

export default Edu;
