import React from 'react'
import Navbar from './items/Navbar'
import Footer from './items/Footer'

function Layaout({children}) {
  return (
    <main>
        <header>
            <Navbar />
        </header>
        <div>
            <article>{children}</article>
        </div>
        <footer>
          <Footer />
        </footer>
    </main>
  )
}

export default Layaout