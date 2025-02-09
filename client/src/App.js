import React from'react'
import Login from './Login/login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup/signup'
import Home from './Home/home'
import NavMenu from './NavMenu/navmenu'
function App() {
  return (
    <>
    <NavMenu/>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
