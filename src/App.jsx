import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/routes.jsx'
import Navbar from './components/navbar'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <Router>
        <Routes />
      </Router>
    </div>
  )
}

export default App
