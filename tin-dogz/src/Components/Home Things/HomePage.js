import HomeCarosel from "./HomeCarosel"
// import NavBar from "../NavBar"

function HomePage(props) {
    
    return (
        <div id="home">
            {/* <NavBar/> */}
            <div id="about">
                <p>Who are we? Where are you? Why are you here?
                To meet dogs. Obvs.
                </p>
                <HomeCarosel />
            </div>
        </div>
    )
}
export default HomePage