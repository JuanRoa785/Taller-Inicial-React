import webAppicon from '../../assets/Icon-WBG.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../AuthContext'
import './Header.css'

function Header() {
    const { isLoggedIn, login, logout } = useAuth();
    const navigate = useNavigate();
    return (
        <>
            <header className="header-basic">
                <div className="firstRow">
                    <div id="left-column">
                        <p>Bienvenido a Not An Ebook un eCommerce online.</p>
                    </div>
                    <div id="right-column">
                        <p id='follow-message'>Siguenos en:</p>
                        <button className="btn rounded-0 border-0" aria-label="Twitter">
                            <i className="bi bi-twitter"></i>
                        </button>

                        <button className="btn rounded-0 border-0" aria-label="Facebook">
                            <i className="bi bi-facebook"></i>
                        </button>

                        <button className="btn rounded-0 border-0" aria-label="YouTube">
                            <i className="bi bi-youtube"></i>
                        </button>

                        <button className="btn rounded-0 border-0" aria-label="Instagram">
                            <i className="bi bi-instagram"></i>
                        </button>
                    </div>
                </div>

                <div className="horizontal-line"></div>

                <div className="secondRow">
                    <NavLink to="/" id="left-column-2r">
                        <img className="img-fluid" src={webAppicon} alt="Temporal Icon" width="60px" />
                        <h4>Not An Ebook</h4>
                    </NavLink>

                    <div className="buscador">
                        <div className="input-group">
                            <input type="search" id="barra-busqueda" className="form-control" placeholder="¡Busca tu libro aquí!" aria-label="Search" aria-describedby="search-addon" />
                            <button id="btn-buscar-libro" type="button" className="btn"> <i className="bi bi-search icon-large"></i> </button>
                        </div>
                    </div>

                    <nav className="navbar navbar-expand-lg">
                        <button className="navbar-toggler" type="button" data-bs-target="#navbarToggler" data-bs-toggle="collapse"
                            aria-controls="navbarToggler" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-center" id="navbarToggler">
                            <ul className="navbar-nav justify-content-center">
                                <li className="nav-item nav-item-header d-flex">
                                    <NavLink to="/clients">
                                        <button className="btn nav-link" aria-label="client" id="btn-client">
                                            <i className="bi bi-credit-card icon-large"></i>
                                        </button>
                                    </NavLink> 
                                </li>

                                <li className="nav-item nav-item-header">
                                    <NavLink to="/users">
                                        <button className="btn nav-link" aria-label="person" id="btn-user">
                                            <i className="bi bi-file-person icon-large"></i>
                                        </button>
                                    </NavLink>
                                </li>

                                <li className="nav-item nav-item-header">
                                    <NavLink to="/providers">
                                        <button className="btn nav-link" aria-label="provider" id="btn-provider">
                                            <i className="bi bi-box-seam icon-large"></i>
                                        </button>
                                    </NavLink>
                                </li>
                                
                                <li className="nav-item nav-item-header" id="inv-nav-container">
                                    <button onClick={() => {
                                        if (isLoggedIn == true) {
                                            logout();
                                            navigate("/");
                                        } else {
                                            navigate("/login");
                                        }
                                    }
                                    } className="btn nav-link" aria-label="session" id="btn-log-in">
                                        <i className={isLoggedIn ? "bi bi-box-arrow-right icon-large" :"bi bi-door-open icon-large"}></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
