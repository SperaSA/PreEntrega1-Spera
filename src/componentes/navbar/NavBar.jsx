import "./navbar.css";

function NavBar (){
    return(
        <nav className="nav-menu">
            <span>
                <img className="home" src="../assets/img/Home.png" alt="" />
            </span>
        <ul className="nav-list">
            <li className="nav-item">
            <a href="/" className="nav-link">
                Especieros
            </a>
            </li>
            <li className="nav-item">
            <a href="/" className="nav-link">
                Impresiones 3D
            </a>
            </li>
            <li className="nav-item">
            <a href="/" className="nav-link">
                Dispenser
            </a>
            </li>
            <li className="nav-item">
            <a href="/" className="nav-link carrito"><img src="../assets/img/Carrito.png" alt="" />
            </a>
            </li>
        </ul>
        </nav>
    )
}

export default NavBar;