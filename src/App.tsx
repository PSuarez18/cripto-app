import './App.css'
import Navbar from './components/NavBar/navbar'
import Detail from './components/Detail/Detail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {

  return (

    <Router>
      <div >
        <header >
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path='/' />
            <Route path='/detail/:id' Component={Detail} />
            <Route path='/about' />
            <Route path='/contact' />
            <Route path='*' />
          </Routes>

        </main>

        <footer>
          <Footer/>

        </footer>
      </div>
    </Router>
  )
}

export default App
