import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/header/layout/Layout'
import Home from '../pages/Home'
import NotFoundPage from '../pages/NotFoundPage'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/auth/register/login/Login'
import Register from '../pages/auth/register/Register'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            }
        ]
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "*",
        element: <NotFoundPage/>,
    }
])
