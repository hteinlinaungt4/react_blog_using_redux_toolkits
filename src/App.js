import React from 'react'
import Header from './components/Navbar/Header'
import { Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import Detail from './components/Product/Detail'
import Notfound from './components/Notfound/Notfound'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/product" element={<Home></Home>}></Route>
        <Route path="/product/:id" element={<Detail></Detail>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>

      </Routes>
    </div>
  )
}

export default App
