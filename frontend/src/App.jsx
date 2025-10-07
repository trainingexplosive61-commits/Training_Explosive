import Header from './components/Header/Header'
import './App.css'
import NavBarClient from './components/NavBarClient/NavBarClient'
import NavBarAdmin from './components/NavBarAdmin/NavBarAdmin'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'

function App() {
  return (
    <>
      <Header />
      <div className="flex h-full">
        <NavBarClient />
        <div className="flex-1 p-6">  
          <Outlet />
        </div>
      </div>
      <Footer /> 
       Página de Login
      
    </>
  )
}

export default App
