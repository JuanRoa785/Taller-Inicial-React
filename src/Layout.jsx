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
