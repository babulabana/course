import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router'
import All from './components/All'
import Navbar from "./components/Navbar"
import Fullstack from "./components/Fullstack"
import Datascience from "./components/Datascience"
import Cybersecurity from "./components/Cybersecurity"
import Career from "./components/Career"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Routes>
      {/* <Route path='/home' element={<Home></Home>}></Route> */}
      {/* <Route path='/coursedetails' element={<Coursedetail></Coursedetail>}></Route> */}
      {/* <Route path='/' element={<Home></Home>}></Route> */}
      <Route path='/all' element={<All></All>}></Route>
      <Route path='/fullstack' element={<Fullstack></Fullstack>}></Route>
      <Route path='/datascience' element={<Datascience></Datascience>}></Route>
      <Route path='/cybersecurity' element={<Cybersecurity></Cybersecurity>}></Route>
      <Route path='/career' element={<Career></Career>}></Route>
    </Routes>
    </>
  )
}

export default App
