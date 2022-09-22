function NavBar(props) {
    
    return (
        // <NavBar />
        <nav className="navbar navbar-expand-sm bg-primary navbar-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a  href="/me" cclassName="nav-link">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a  href="/matches" cclassName="nav-link">Meet a dog!</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
        // <div>
        //     <p>hi im a nav bar pls navigate</p>
        // </div>
    )
}
export default NavBar
