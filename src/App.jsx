import './App.css'
import { useAuth } from './AuthContext.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/Login/Login.jsx'
import ClientPage from './Pages/Client/Client.jsx'
import ProviderPage from './Pages/Provider/Provider.jsx'
import UserPages from './Pages/User/User.jsx'
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
        { path: '/users', element: isLoggedIn ? <UserPages /> : <LoginPage />}
      ]
    }
  ]);

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
