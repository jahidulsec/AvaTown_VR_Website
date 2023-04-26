import React from 'react'
import Navbar from './navbar/Navbar'
import Home from './navbar/home/Home'
import Sales from './navbar/sales/Sales'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import "./App.scss"


const App = () => {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element: <Home />,
        },
        {
          path: "/item/:id",
          element: <Sales />
        }
      ]
    }
  ])

  return (<RouterProvider router={router} />)
}

export default App