# Taller Inicial (React + Vite) - Entornos de Programación - Universidad Industrial De Santander

### 📌 Descripción del repositorio:
<p align="justify">
Este pequeño repositorio representa un primer acercamiento a la creación de un sitio web, específicamente un <strong>Ecommerce</strong>, utilizando <b><code>React</code></b> y <b><code>Vite</code></b>. Inicialmente, el objetivo era implementar un sistema de navegación básico mediante un <code>Header</code> y el paquete <code>react-router-dom</code>. Sin embargo, al reutilizar el frontend desarrollado para la primera entrega del proyecto final del curso, se decidió ir un paso más allá. Como resultado, se incorporó un <strong>login estático</strong> y el <strong>mapeo de datos</strong> almacenados en arreglos, con el fin de mejorar la experiencia visual del sitio y hacerlo más interactivo.
</p>

## ✅ Software en Ejecución
![Software en Ejecución](assetsTaller/Software%20en%20Ejecucion.gif)


## 🧩 Tecnologías utilizadas
| Componente  | Tecnología | Descripción|
|------------ |------------|------------|
| **Framework para el Frontend**   | ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black) | Construcción de componentes reutilizables con **React** para una experiencia de usuario dinámica. |
| **Framework de Estilos** | ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white) | Se utilizó **Bootstrap** para el diseño rápido y responsivo de la interfaz de usuario. |
| **Empaquetador**         | ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) |  Proyecto inicializado y gestionado con **Vite**, ofreciendo una recarga rápida en desarrollo. |
| **Gestor de paquetes**   | ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white) | Uso de **Node.js** para ejecutar herramientas en el entorno y **npm** como gestor de dependencias. |
| **Entorno de Desarrollo**| ![Ubuntu](https://img.shields.io/badge/Ubuntu-22.04-orange?logo=ubuntu) ![VS Code](https://img.shields.io/badge/VS_Code-007ACC?logo=visualstudiocode&logoColor=white) | Desarrollo realizado en **Ubuntu 22.04**, utilizando **Visual Studio Code** como editor principal. |

## 🔧 Aspectos claves del desarrollo

### 🗂️ Estructura de Carpetas del Proyecto
```
📂 src
├── 📂 assets
├── 📂 Componentes
│ ├── 📂 Footer
│ └── 📂 Header
├── 📂 Pages
│ ├── 📂 Client
│ ├── 📂 Home
│ ├── 📂 Login
│ ├── 📂 Provider
│ └── 📂 User
├── App.css
├── App.jsx
├── AuthContext.jsx
├── index.css
├── Layout.jsx
└── main.jsx
```
### 🔤 Diferencias entre la sintaxis de HTML, CSS, JS y JSX

- En JSX, se usa `className` en lugar de `class` para asignar clases CSS a los elementos.
  
- Los estilos en JSX se definen dentro de corchetes y emplean la convención de `camelCase` para las propiedades CSS.
    ```JSX
    <img src={inDevelopment} alt="in Development" style={{textAlign: 'center', width: '600px'}}/>
    ```

- En lugar de utilizar métodos como `getElementById`, React maneja el estado de los componentes mediante el hook `useState`.
    ```JSX
    const [errPassword, seterrPassword] = useState(false);
    if (formData.logPassword.length < 8 && formData.logPassword.length >= 1) {
      seterrPassword(true);
    } else {
      seterrPassword(false);
    }
    ```

- En JSX, las funciones principales del componente se exportan y se utilizan como etiquetas dentro de otras funciones. Esto permite componer interfaces de manera modular.
    ```JSX
  import inDevelopmentImage from "../../assets/in_development.gif"
  
  function HomePage() {
      return(
          <div style={{display: 'flex', justifyContent:'center', alignContent:'center'}}>
              <img src={inDevelopment} alt="in development" style={{textAlign: 'center', width: '600px'}}/>
          </div>
      )
  }
  export default HomePage
    ```
    
---
    
### 🧭 Enrutamiento
1. **Instalar `react-router-dom`**
  
    Para habilitar el enrutamiento en la aplicación, primero debemos instalar `react-router-dom`:
    ```bash
    npm install react-router-dom
    ```
2. **Crear el Layout**
  
    Se define un componente `Layout` que centraliza el contenido de la aplicación dentro de una estructura común (cabecera, cuerpo y pie de página). El contenido específico de cada ruta se carga dinámicamente a través de la etiqueta `<Outlet />`:
   
    ```JSX
    import { Outlet } from 'react-router-dom'
    import Header from './Componentes/Header/Header.jsx'
    import Footer from './Componentes/Footer/Footer.jsx'
    
    function Layout() {
      return (
        <>
          <Header />
          <div className="content">
            <Outlet /> {/* Aquí se cargan las páginas */}
          </div>
          <Footer />
        </>
      )
    }
    
    export default Layout
    ```
3. **Crear el router**
   
    Se crea el enrutador utilizando `createBrowserRouter` y se definen las rutas principales de la aplicación. El componente `Layout` sirve como plantilla para todas las rutas, y se usan rutas hijas para las páginas específicas. Además, se controla el acceso a ciertas páginas (como la de clientes, proveedores y usuarios) según el estado de autenticación:
    ```JSX
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Layout />, // Layout principal
        children: [
          { path: '*', element: <HomePage /> },
          { path: '/', element: <HomePage /> },
          { path: '/login', element: <LoginPage /> },
          { path: '/clients', element: isLoggedIn ? <ClientPage /> : <LoginPage /> },
          { path: '/providers', element: isLoggedIn ? <ProviderPage /> : <LoginPage /> },
          { path: '/users', element: isLoggedIn ? <UsersPage /> : <LoginPage />}
        ]
      }
    ]);
    ```
### 📦 Resultado Final en `App.jsx`

El archivo `App.jsx` integra todo el enrutamiento y la lógica de autenticación, utilizando `RouterProvider` para suministrar el enrutador a la aplicación:
```JSX
import './App.css'
import { useAuth } from './AuthContext.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/Login/Login.jsx'
import ClientPage from './Pages/Client/Client.jsx'
import ProviderPage from './Pages/Provider/Provider.jsx'
import UsersPage from './Pages/User/User.jsx'
import Layout from './Layout.jsx'
import HomePage from './Pages/Home/Home.jsx'

function App() {

  const { isLoggedIn, login, logout } = useAuth();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, // Layout principal
      children: [
        { path: '*', element: <HomePage /> },
        { path: '/', element: <HomePage /> },
        { path: '/login', element: <LoginPage /> },
        { path: '/clients', element: isLoggedIn ? <ClientPage /> : <LoginPage /> },
        { path: '/providers', element: isLoggedIn ? <ProviderPage /> : <LoginPage /> },
        { path: '/users', element: isLoggedIn ? <UsersPage /> : <LoginPage />}
      ]
    }
  ]);

  return (
        <RouterProvider router={router} />
  )
}

export default App
```

---

### 🔐 Autenticación

Se implementó un **contexto personalizado** (`AuthContext`) para manejar el estado de autenticación globalmente en la aplicación. Esto permite saber si un usuario está autenticado y facilita el acceso a funciones como `login` y `logout` desde cualquier componente.

```JSX
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para usar el contexto fácilmente
export function useAuth() {
  return useContext(AuthContext);
}

```

Este contexto requiere un pequeño ajuste en el archivo `main.jsx` para envolver la aplicación dentro del `AuthProvider`, asegurando que todos los componentes puedan acceder al contexto:

```JSX
...
import { AuthProvider } from './AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
```

Gracias a esto, dentro de `App.jsx` o cualquier otro componente se puede acceder fácilmente a la variable `isLoggedIn` y a las funciones `login` y `logout` usando el hook `useAuth`.

A continuación se muestra un ejemplo práctico en el componente `LoginPage`, donde se utiliza el contexto para autenticar al usuario con valores predeterminados:
```JSX
...
import { useAuth } from '../../AuthContext.jsx';
function LoginPage() {
  const { isLoggedIn, login, logout } = useAuth();
  const defaultAuthValues = {
    'correo': 'admin@admin.com',
    'password': 'adminadmin'
  }

  ...

  return(
    ...
    <button id="iniciar-sesion" type="button" className="login-btn  btn-primary mb-3"
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

      ...
  )
}
```
## 🛠️ Guía de Ejecución en ![Ubuntu](https://img.shields.io/badge/Ubuntu-22.04-orange?logo=ubuntu)

### Clonar el Repositorio:
```bash
git clone https://github.com/JuanRoa785/Taller-Inicial-React.git

#Deberá aparecer un directorio (Carpeta) llamado Taller-Inicial-React
ls
```

### Instalar las dependencias:
```bash
cd Taller-Inicial-React #Si aun no lo habías hecho
npm install
```

### Iniciar el servidor:
```bash
npm run dev
#Acceder al puerto que se indique, normalmente el 5173 (http://localhost:5173/)
```
![image](https://github.com/user-attachments/assets/916c2ab3-701a-4614-98e3-ff6aa0ba622f)

### Credenciales de acceso:
> **Correo Electrónico**: **admin@admin.com**

> **Contraseña**: **adminadmin**

### Detener el servidor:
- **Cerrar la consola donde se está ejecutando el `npm run dev`**
- **Ctrl + C**
- **Apagar el PC**

## Créditos y Código Fuente Original
<p align="justify">Este proyecto fue adaptado a partir de un código similar desarrollado por Juan Diego Roa, Kevin Dannie Guzman, entre otros para la asignatura de <b>Entornos de Programación</b> de la <b>Universidad Industrial de Santander</b>:</p>

🔗 [Kevin2211875/not-an-ebook](https://github.com/Kevin2211875/not-an-ebook.git)

Se realizaron modificaciones a esa versión original para adaptarla a los requerimientos específicos de este taller.
