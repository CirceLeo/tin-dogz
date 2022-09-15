import HomeCarosel from "./HomeCarosel"

function HomePage(props) {
    
    return (
        <div id="home">
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