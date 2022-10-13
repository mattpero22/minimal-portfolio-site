// import all pages that appear on main component
import About from "../pages/About"
import Edu from "../pages/Edu"
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import Skills from "../pages/Skills"

function Main(props) {

    let pageEle = <></>

    // ternaries to set the page element variable
    props.page === "home" ? pageEle = <Home theme={props.theme} page={props.page} setPage={props.setPage} pages={props.pages} pageSelect={props.pageSelect}> </Home> : <></>
    props.page === "about" ? pageEle = <About theme={props.theme} page={props.page} setPage={props.setPage} pages={props.pages} pageSelect={props.pageSelect}> </About> : <></>
    props.page === "projects" ? pageEle = <Projects theme={props.theme} page={props.page} setPage={props.setPage} pages={props.pages} pageSelect={props.pageSelect}> </Projects> : <></>
    props.page === "skills" ? pageEle = <Skills theme={props.theme} page={props.page} setPage={props.setPage} pages={props.pages} pageSelect={props.pageSelect}> </Skills> : <></>
    props.page === "edu" ? pageEle = <Edu theme={props.theme} page={props.page} setPage={props.setPage} pages={props.pages} pageSelect={props.pageSelect}> </Edu> : <></>


    return (
        <div id="main" className={props.fade}>
            {pageEle}
        </div>
    );
}

export default Main;