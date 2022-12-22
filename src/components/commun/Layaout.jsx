import React from 'react'
import Navbar from './items/Navbar'

function Layaout({children}) {
  return (
    <main>
        <header>
            <Navbar />
        </header>
        <div>
            <article>{children}</article>
        </div>
    </main>
  )
}

export default Layaout