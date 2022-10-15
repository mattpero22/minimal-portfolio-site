import { useState } from 'react';
import ReactTooltip from 'react-tooltip';

const Skills = (props) => {

    const [tooltip, showTooltip] = useState(true);

    // TODO: make static folder of images instead of links to other pages
    // TODO: make custom obj for adding the tooltip to my icons to make code more DRY

    return (
        <div className="skills_page">
            <div className={`skills_section bg_${props.theme}`}>
                <h3>Languages</h3>
                <div className='skill_icons'>
                    <>
                        {tooltip && <ReactTooltip effect="solid" />}
                        <img
                            className="skill_icon"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
                            alt="python"
                            data-tip="Python"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                showTooltip(false);
                                setTimeout(() => showTooltip(true), 0);
                            }}
                        />
                    </>
                    <>
                        {tooltip && <ReactTooltip effect="solid" />}
                        <img
                            className="skill_icon"
                            src="https://i.imgur.com/0DeXqd6.png"
                            alt="html"
                            data-tip="HTML"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                showTooltip(false);
                                setTimeout(() => showTooltip(true), 0);
                            }}
                        />
                    </>
                    <>
                        {tooltip && <ReactTooltip effect="solid" />}
                        <img
                            className="skill_icon"
                            src="https://i.imgur.com/gyNinVG.png"
                            alt="css"
                            data-tip="CSS"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                showTooltip(false);
                                setTimeout(() => showTooltip(true), 0);
                            }}
                        />
                    </>
                    <>
                        {tooltip && <ReactTooltip effect="solid" />}
                        <img
                            className="skill_icon"
                            src="https://i.imgur.com/w5Y6YND.png"
                            alt="js"
                            data-tip="JavaScript"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                showTooltip(false);
                                setTimeout(() => showTooltip(true), 0);
                            }}
                        />
                    </>
                    <>
                        {tooltip && <ReactTooltip effect="solid" />}
                        <img
                            className="skill_icon"
                            src="https://i.imgur.com/YvPtI2n.png"
                            alt="sql"
                            data-tip="SQL"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                showTooltip(false);
                                setTimeout(() => showTooltip(true), 0);
                            }}
                        />
                    </>
                    <>
                        {tooltip && <ReactTooltip effect="solid" />}
                        <img
                            className="skill_icon"
                            src="https://i.imgur.com/TK2fhAg.png"
                            alt="matlab"
                            data-tip="MATLAB"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                showTooltip(false);
                                setTimeout(() => showTooltip(true), 0);
                            }}
                        />
                    </>
                    <>
                        {tooltip && <ReactTooltip effect="solid" />}
                        <img
                            className="skill_icon"
                            src="https://i.imgur.com/rK6cgqb.png"
                            alt="c"
                            data-tip="C"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                showTooltip(false);
                                setTimeout(() => showTooltip(true), 0);
                            }}
                        />
                    </>
                    <>
                        {tooltip && <ReactTooltip effect="solid" />}
                        <img
                            className="skill_icon"
                            src="https://i.imgur.com/J9vqWty.png"
                            alt="c++"
                            data-tip="C++"
                            onMouseEnter={() => showTooltip(true)}
                            onMouseLeave={() => {
                                showTooltip(false);
                                setTimeout(() => showTooltip(true), 0);
                            }}
                        />
                    </>
                </div>
            </div>
            <div className={`skills_section bg_${props.theme}`}>
                <h3>Libraries and Frameworks</h3>
                <div className="skill_icons">
                <>
                    {tooltip && <ReactTooltip effect="solid" />}
                    <img
                        className="skill_icon"
                        src="https://i.imgur.com/ePTfjzt.png"
                        alt="react"
                        data-tip="React"
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                            showTooltip(false);
                            setTimeout(() => showTooltip(true), 0);
                        }}
                    />
                </>
                <>
                    {tooltip && <ReactTooltip effect="solid" />}
                    <img
                        className="skill_icon"
                        src="https://i.imgur.com/Ke6koPJ.png"
                        alt="node.js"
                        data-tip="Node"
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                            showTooltip(false);
                            setTimeout(() => showTooltip(true), 0);
                        }}
                    />
                </>
                <>
                    {tooltip && <ReactTooltip effect="solid" />}
                    <img
                        className="skill_icon"
                        src="https://i.imgur.com/BX4UdjY.png"
                        alt="express"
                        data-tip="Express"
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                            showTooltip(false);
                            setTimeout(() => showTooltip(true), 0);
                        }}
                    />
                </>
                <>
                    {tooltip && <ReactTooltip effect="solid" />}
                    <img
                        className="skill_icon"
                        src="https://i.imgur.com/5xk8xhR.png"
                        alt="mongodb"
                        data-tip="MongoDB"
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                            showTooltip(false);
                            setTimeout(() => showTooltip(true), 0);
                        }}
                    />
                </>
                <>
                    {tooltip && <ReactTooltip effect="solid" />}
                    <img
                        className="skill_icon"
                        src="https://i.imgur.com/gQMAhsd.png"
                        alt="jquery"
                        data-tip="jQuery"
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                            showTooltip(false);
                            setTimeout(() => showTooltip(true), 0);
                        }}
                    />
                </>
                <>
                    {tooltip && <ReactTooltip effect="solid" />}
                    <img
                        className="skill_icon contrast"
                        src="https://pandas.pydata.org/static/img/pandas_secondary.svg"
                        alt="pandas"
                        data-tip="pandas"
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                            showTooltip(false);
                            setTimeout(() => showTooltip(true), 0);
                        }}
                    />
                </>
                <>
                    {tooltip && <ReactTooltip effect="solid" />}
                    <img
                        className="skill_icon"
                        src="https://i.imgur.com/JyDaA3s.png"
                        alt="openpyxl"
                        data-tip="Openpyxl"
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                            showTooltip(false);
                            setTimeout(() => showTooltip(true), 0);
                        }}
                    />
                </>
                <>
                    {tooltip && <ReactTooltip effect="solid" />}
                    <img
                        className="skill_icon"
                        src="https://i.imgur.com/RWlPK3i.png"
                        alt="matplotlib"
                        data-tip="Matplotlib"
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                            showTooltip(false);
                            setTimeout(() => showTooltip(true), 0);
                        }}
                    />
                </>
                <>
                    {tooltip && <ReactTooltip effect="solid" />}
                    <img
                        className="skill_icon contrast"
                        src="https://user-images.githubusercontent.com/67586773/105040771-43887300-5a88-11eb-9f01-bee100b9ef22.png"
                        alt="numpy"
                        data-tip="NumPy"
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                            showTooltip(false);
                            setTimeout(() => showTooltip(true), 0);
                        }}
                    />
                </>
                <>
                    {tooltip && <ReactTooltip effect="solid" />}
                    <img
                        className="skill_icon"
                        src="https://scipy.org/images/logo.svg"
                        alt="scipy"
                        data-tip="SciPy"
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                            showTooltip(false);
                            setTimeout(() => showTooltip(true), 0);
                        }}
                    />
                </>
                </div>
            </div>
            <div className={`skills_section bg_${props.theme}`}>
                <h3>Software</h3>
                <div className="skill_icons">
                <>
                    {tooltip && <ReactTooltip effect="solid" />}
                    <img
                        className="skill_icon"
                        src="https://i.imgur.com/04j7fLZ.png"
                        alt="command line"
                        data-tip="Command Line"
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                            showTooltip(false);
                            setTimeout(() => showTooltip(true), 0);
                        }}
                    />
                </>
                <>
                    {tooltip && <ReactTooltip effect="solid" />}
                    <img
                        className="skill_icon"
                        src="https://i.imgur.com/eazaTSt.png"
                        alt="github"
                        data-tip="GitHub"
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                            showTooltip(false);
                            setTimeout(() => showTooltip(true), 0);
                        }}
                    />
                </>
                <>
                    {tooltip && <ReactTooltip effect="solid" />}
                    <img
                        className="skill_icon"
                        src="https://i.imgur.com/0yFrtO9.png"
                        alt="heroku"
                        data-tip="Heroku"
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                            showTooltip(false);
                            setTimeout(() => showTooltip(true), 0);
                        }}
                    />
                </>
                <>
                    {tooltip && <ReactTooltip effect="solid" />}
                    <img
                        className="skill_icon contrast"
                        src="https://i.imgur.com/qd5idq2.png"
                        alt="netlify"
                        data-tip="Netlify"
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                            showTooltip(false);
                            setTimeout(() => showTooltip(true), 0);
                        }}
                    />
                </>
                <>
                    {tooltip && <ReactTooltip effect="solid" />}
                    <img
                        className="skill_icon wide"
                        src="https://i.imgur.com/0Z1gOqA.png"
                        alt="word"
                        data-tip="Microsoft Word"
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                            showTooltip(false);
                            setTimeout(() => showTooltip(true), 0);
                        }}
                    />
                </>
                <>
                    {tooltip && <ReactTooltip effect="solid" />}
                    <img
                        className="skill_icon wide"
                        src="https://i.imgur.com/47ZD5iM.png"
                        alt="word"
                        data-tip="Microsoft Excel"
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                            showTooltip(false);
                            setTimeout(() => showTooltip(true), 0);
                        }}
                    />
                </>
                <>
                    {tooltip && <ReactTooltip effect="solid" />}
                    <img
                        className="skill_icon"
                        src="https://i.imgur.com/c6gB1ET.png"
                        alt="vscode"
                        data-tip="VS Code"
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                            showTooltip(false);
                            setTimeout(() => showTooltip(true), 0);
                        }}
                    />
                </>
                <>
                    {tooltip && <ReactTooltip effect="solid" />}
                    <img
                        className="skill_icon"
                        src="https://i.imgur.com/J8tFOCK.png"
                        alt="pycharm"
                        data-tip="PyCharm"
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                            showTooltip(false);
                            setTimeout(() => showTooltip(true), 0);
                        }}
                    />
                </>
                <>
                    {tooltip && <ReactTooltip effect="solid" />}
                    <img
                        className="skill_icon"
                        src="https://i.imgur.com/IQ9noEO.png"
                        alt="solidworks"
                        data-tip="Solidworks"
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                            showTooltip(false);
                            setTimeout(() => showTooltip(true), 0);
                        }}
                    />
                </>
                </div>
            </div>
        </div>
    )
}

export default Skills;