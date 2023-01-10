import { useState } from 'react'
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom'
import {Home, Register, Login, Gap} from './pages/index'
import Layaout from './components/commun/Layaout'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Layaout>{<Home />}</Layaout>}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/gap' element={<Layaout>{<Gap />}</Layaout>}/>
      </Routes>
    </Router>
  )
}

export default App
