import { useState } from 'react'
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom'
import {Home} from './pages/index'
import Layaout from './components/commun/Layaout'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layaout>{<Home />}</Layaout>}/>
      </Routes>
    </Router>
  )
}

export default App
