import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/HomePage/HomePage"
import Chat from "./pages/Chat/Chat"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Profile from "./pages/Profile/Profile"
import Conectar from "./pages/Conectar/Conectar"
import Provider from "./provider"
function App() {
  return (
    <Provider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Perfil" element={<Profile />} />
          <Route path="/Conectar" element={<Conectar />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App