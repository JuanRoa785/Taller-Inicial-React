import { NavLink } from 'react-router-dom'
import webAppicon from '../../assets/Icon-WBG.png'
import { useAuth } from '../../AuthContext'
import './Footer.css'

function Footer() {
    const { isLoggedIn, login, logout } = useAuth();
    return (
        <>
            <div id="footer-content">
                <div id="column-1">
                    <div id="icon">
                        <img src={webAppicon} alt="TemporalIconFooter" width="35px" style={{display: 'inline', marginRight: '5px'}}/>
                        <h5 style={{display: 'inline', color: 'white'}}>Not An Ebook</h5>
                    </div>
                    <p style={{color: '#77878F', marginBottom: '0px', marginTop: '5px', fontSize: '12px'}}>Servicio al Cliente</p>
                    <p style={{color: 'white', fontSize: '16px', marginBottom: '5px'}}>(601) 918-8211</p>
                    <p style={{color: '#77878F', marginBottom: '5px', fontSize: '12px', width: '200px'}}>Cra 33 # 52-48. Bucaramanga, Santander</p>
                    <p className="subtitles-text">NotAnEbook&#64;contactme.com</p>
                </div>

                <div id="column-2">
                    <p className="subtitles-text">GENEROS LITERARIOS </p>
                    <div id="links-generos-Literarios">
                        <div className="column">
                            <a>Fantasía</a>
                            <a>Thriller</a>
                            <a>Distopía</a>
                            <a>Aventura</a>
                            <a>Ciencia Ficción</a>
                            <a>Terror</a>
                        </div>

                        <div className="column">
                            <a>Histórica</a>
                            <a>Infantil</a>
                            <a>Romántica</a>
                            <a>Contemporáneo</a>
                            <a>Poesía</a>
                            <a>Paranormal</a>
                        </div>
                    </div>
                </div>

                <div id="column-3">
                    <p className="subtitles-text">ENLACES RAPIDOS</p>
                    <NavLink to="/clients">Clientes</NavLink>
                    <NavLink to="/users">Usuarios</NavLink>
                    <NavLink to="/providers">Proveedores</NavLink>
                    <NavLink to={isLoggedIn ? "/": "/login"}>Iniciar Sesion</NavLink>
                </div>

                <div id="column-5">
                    <p className="subtitles-text">EDITORIALES POPULARES</p>
                    <div className="columns-wrap">
                        <div className="column">
                            <button className="popular-tag">Alfaguara</button>
                            <button className="popular-tag">Salamandra</button>
                            <button className="popular-tag">Booket</button>
                            <button className="popular-tag">Alianza</button>
                        </div>

                        <div className="column">
                            <button className="popular-tag">Planeta</button>
                            <button className="popular-tag">Debolsillo</button>
                            <button className="popular-tag">Minotauro</button>
                            <button className="popular-tag">Molino</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
