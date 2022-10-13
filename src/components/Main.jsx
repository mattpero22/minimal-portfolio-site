// import all pages that appear on main component
import About from "../pages/About"
import Edu from "../pages/Edu"
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import Skills from "../pages/Skills"

function Main(props) {
    
    let page_element = <></>

    // ternaries to set the page element variable
    props.page === "home" ? page_element = <Home theme={props.theme} page={props.page} setPage={props.setPage} pages={props.pages} pageSelect={props.pageSelect}> </Home> : <></>
    props.page === "about" ? page_element = <About theme={props.theme} page={props.page} setPage={props.setPage} pages={props.pages} pageSelect={props.pageSelect}> </About> : <></>
    props.page === "projects" ? page_element = <Projects theme={props.theme} page={props.page} setPage={props.setPage} pages={props.pages} pageSelect={props.pageSelect}> </Projects> : <></>
    props.page === "skills" ? page_element = <Skills theme={props.theme} page={props.page} setPage={props.setPage} pages={props.pages} pageSelect={props.pageSelect}> </Skills> : <></>
    props.page === "edu" ? page_element = <Edu theme={props.theme} page={props.page} setPage={props.setPage} pages={props.pages} pageSelect={props.pageSelect}> </Edu> : <></>

    return (
        <div id='main'>
            {page_element}
        </div>
    );
}

export default Main;