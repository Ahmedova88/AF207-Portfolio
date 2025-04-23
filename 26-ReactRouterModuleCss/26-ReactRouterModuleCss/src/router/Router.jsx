import {createBrowserRouter} from "react-router-dom"
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Services from '../pages/Services'
import Layout from "../components/shared/Layout"

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element:<Layout/>,
            children: [
                {
                    path: "/",
                    element:<Home/>
                },
                {
                    path: "/about",
                    element:<About/>
                },
                {
                    path: "/contact",
                    element:<Contact/>
                },
                {
                    path: "/services",
                    element:<Services/>
                }
            ]
        }
    ]
)

