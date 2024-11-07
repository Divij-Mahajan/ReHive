import './styles/App.css'
import Home from './pages/home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Role from './pages/role'
import Seeker from './pages/seeker'
import Referrer from './pages/referrer'
function App() {
return (
   <Router>
   <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/role' element={<Role />} />
      <Route path='/seeker/:screen' element={<Seeker />} />
      <Route path='/referrer/:screen' element={<Referrer />} />
   </Routes>
   </Router>
)
}

export default App