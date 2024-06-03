import { useState } from 'react'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Homepage from "./components/HomePage"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import Dashboard from "./components/Dashboard"


function App() {
  
  const routes = createBrowserRouter([
    {path: '/', element : <Homepage></Homepage>},
    {path : '/login', element : <LoginPage></LoginPage>},
    {path : '/register', element : <RegisterPage></RegisterPage>},
    {path : '/dashboard', element : <Dashboard></Dashboard>},
    
    
  ])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
