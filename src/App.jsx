import { useState } from 'react'
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom'
import {Home, Register, Login, Gap} from './pages/index'
import Layaout from './components/commun/Layaout'
import {UserProvider} from './context/UserContext.jsx'
import Protected from './pages/Protect'
import './App.css'

function App() {
  const [isSignedIn, setIsSignedIn] = useState(null)
    const signin = () => {
      setIsSignedIn(true)
    }
    const signout = () => {
      setIsSignedIn(false)
    }
  return (
    <Router>
      <UserProvider >
      <Routes>
      <Route path='/' element={<Layaout>{<Home />}</Layaout>}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/gap' element={<Layaout>{<Gap />}</Layaout>}/>
      {/* <Route path='/gap' element={
        <Protected isSignedIn={isSignedIn}>
          <Gap />
        </Protected>
      } /> */}
      </Routes>
      </UserProvider>
    </Router>
  )
}

export default App
