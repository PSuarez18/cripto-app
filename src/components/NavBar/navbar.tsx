import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Styles/NavBar.css";

export default function NavBar() {
    return (
        <div className='navbarMain'>
            <nav className="navbar navbar-expand-sm navbar-dark bg-">
                <button className="custom" type="button" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="input-group justify-content-center align-items-center">
                        <input className="smallNav-search-bar" type="search" placeholder="Busqueda..." aria-label="Search" />
                    </div>
                </div>
            </nav>
        </div>
    );
}



