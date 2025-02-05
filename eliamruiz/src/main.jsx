import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Cv_page from './pages/Cv_page.jsx'
import Contact from './pages/Contact_page.jsx'

const Layout = () =>{
    return(
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const router = createBrowserRouter([{
    path: '/',
    element:<Layout/>,
    children: [
        {
            path: '/',
            element: <App/>
        },
        {
            path: '/cv',
            element: <Cv_page/>
        },
        {
            path: '/contact',
            element: <Contact/>
        }
    ]

}])


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
