
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Navbar from './pages/Shared/Header/Navbar'
function App() {
  

  return (
    <div >
      <Header></Header>
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
     
    </div>
  )
}

export default App
