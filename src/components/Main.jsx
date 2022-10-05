// import all pages that appear on main component
import Home from "../pages/Home"

function Main(props) {
    return (
        <div id='main'>
            <Home theme={props.theme}> </Home>
        </div>
    );
}

export default Main;