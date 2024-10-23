import React from 'react'
import { Route, Routes } from 'react-router-dom'

// import AuthLayout from '../layouts/AuthLayout'
// import Login from '../pages/Auth/Login'

// import Dashboard from '../pages/Dashboard'



import PageLayout from '../layouts/PageLayout'
import Home from '../pages/Home'



const Routers = () => {
  return (
    <Routes>
            {/* <Route path='/' element={<Login />} /> */}
        <Route element={<PageLayout />}>
          <Route path='/' element={<Home />} />
        </Route>
       
    
    </Routes>
  )
}

export default Routers