import lady from "./Photos/lady.png"
function HomeCarosel(props) {
    
    return (
        <div class="slideshow-container">
            <p>Hello</p>
                <img src={lady} alt="lady and tramp"/>
            <div className="mySlides fade">
                <p>tramp</p>
                
                <div className="numbertext"> 1/3</div>
                <div className="test"></div>
            </div>
        </div>
    )
}
export default HomeCarosel