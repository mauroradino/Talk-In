import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/HomePage/HomePage"
import Chat from "./pages/Chat/Chat"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from "./pages/SignUp/SignUp"
import SignIn from "./pages/SignIn/SignIn"
function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Registro" element={<SignUp/>} />
        <Route path="/InicioSesion" element={<SignIn/>} />
        <Route path="/Chat" element={<Chat/>} />

      </Routes>
    </Router>
  )
}

export default App