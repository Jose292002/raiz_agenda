import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login'
import Users from './pages/Users'
import Areas from './pages/Areas'

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Login}></Route>
      <Route path='/users' Component={Users}></Route>
      <Route path='/areas' Component={Areas}></Route>
    </Routes>
  </BrowserRouter>
  )
  
};

export default App