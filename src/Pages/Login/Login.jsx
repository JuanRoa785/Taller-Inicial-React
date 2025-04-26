import { useState } from "react"
import { useAuth } from '../../AuthContext.jsx';
import './Login.css'
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const { isLoggedIn, login, logout } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const [formData, setFormData] = useState({
        logEmail: '',
        logPassword: '',
    });

    const [errPassword, seterrPassword] = useState(false);
    const [errEmail, seterrEmail] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name == 'logEmail') {
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            if (value.length > 0 && !isValidEmail){
                seterrEmail(true);
            } else {
                seterrEmail(false);
            }
        } else {
            if (value.length < 8 && value.length >= 1) {
                seterrPassword(true);
            } else {
                seterrPassword(false);
            }
        }

        setFormData((prevState) => {
            // Usamos el operador spread '...' para copiar el estado anterior
            return {
                ...prevState,                // Copia el estado anterior
                [name]: value                // Actualiza solo el campo correspondiente
            };
        });
    }

    const defaultAuthValues = {
        'correo': 'admin@admin.com',
        'password': 'adminadmin'
    }

    return (
        <>
        <div id="login-Card-Container">
            <div className="card" style={{margin:'25px 0px'}}>
                <div className="nav nav-tabs d-flex" style={{justifyContent: 'center', height: 'fit-content'}} id="nav-tab"
                    role="tablist">
                    <a className="w-100 nav-item nav-link" id="tabLeft" style={{flex: 1}}>
                        Iniciar Sesión
                    </a>
                    <a className="w-100 nav-item nav-link" id="tabRight" style={{flex: 1}}>
                        Registrarse
                    </a>
                </div>

                <div id="login-form" style={{padding: '10px'}}>
                    <form>
                        <div className="mb-3">
                            <p className="form-label">Correo Electronico</p>
                            <input type="text" onChange={handleChange} className="form-control" placeholder="Digite su email aquí"
                                name="logEmail" autoComplete="off"/>
                            <p id="email-error-login" style={{display: errEmail ? 'flex': 'none', color: 'red', fontWeight: 500}}>
                                * El correo Electronico no es valido *
                            </p>
                        </div>

                        <div className="mb-3" style={{marginBottom: '0px'}}>

                            <p className="form-label" style={{display: 'block'}}>Contraseña</p>

                            <div className="password-toggle" style={{display: 'flex', alignItems: 'center'}}>
                                <input type={showPassword ? 'text' : 'password'} onChange={handleChange} className="form-control" name="logPassword" placeholder="8+ Caracteres" />
                                <i className={showPassword ? 'bi bi-eye' : 'bi bi-eye-slash'} onClick={togglePassword} style={{cursor: 'pointer'}} id="show-password-icon"></i>
                            </div>

                            <p id="password-error-login" style={{display: errPassword ? 'flex': 'none', color: 'red', fontWeight: 500}}>
                                * La contraseña debe tener mas de 8 caracteres *
                            </p>
                        </div>

                        <button id="iniciar-sesion" type="button" className="login-btn  btn-primary mb-3" style={{width: '100%', marginBottom: '0px'}}
                        onClick={() => {
                            if (isLoggedIn == true) {
                                return;
                            }

                            if (errEmail || errPassword) {
                                return;
                            }

                            if (formData.logEmail == defaultAuthValues.correo && formData.logPassword == defaultAuthValues.password) {
                                login();
                                navigate("/");
                            } else {
                                alert("Credenciales incorrectas, revise la documentación");
                            }
                        }}>
                            Iniciar Sesión
                        </button>

                        <div className="mb-3" style={{display: 'flex', alignItems: 'center', textAlign: 'center', margin: '0px'}}>
                            <hr style={{flex: 1, border: 'none', borderTop: '1px solid #000', margin: '0px'}}/>
                            <span style={{padding: '0 10px', color: '#000'}}>o</span>
                            <hr style={{flex: 1, border: 'none', borderTop: '1px solid #000', margin: '0px'}}/>
                        </div>

                        <div className="d-flex justify-content-center mb-3">
                            <button type="button" className="login-btn otherButton d-flex align-items-center" style={{width: '80%'}}>
                                <i className="bi bi-google" style={{paddingLeft: '32px'}}></i>
                                <span className="text-center flex-grow-1">Inicia Sesion con Google</span>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mb-3">
                            <button type="button" className="login-btn otherButton d-flex align-items-center" style={{width: '80%'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="#FA8232"
                                    className="bi bi-apple" viewBox="0 0 16 16">
                                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                                </svg>
                                <span className="text-center flex-grow-1">Inicia Sesion con Apple</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginPage
