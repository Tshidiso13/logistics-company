import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Fleet from './pages/Fleet'
import Services from './pages/Services'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/fleet' element={<Fleet />} />
        <Route path='/services' element={<Services />} />

      </Routes>
    </div>
  )
}

export default App