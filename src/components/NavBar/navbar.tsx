import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Styles/NavBar.css"

export default function NavBar() {
    return (
        <div className='navbarMain'>
            <nav className="navbar navbar-expand-lg navbar-dark bg- ">
                <a className="navbar-brand " href="#">
                    <span className="navbar-toggler-icon"></span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="input-group justify-content-center align-items-center">
                        <input className=" smallNav-search-bar" type="search" placeholder="Busqueda" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}


