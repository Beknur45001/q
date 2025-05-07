import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Regicter from "./pages/Regicter";
import LogIn from "./pages/LogIn";

const myRouter=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"regicter",
                element:<Regicter/>
            },
            {
                path:"regicter/login",
                element:<LogIn/>
            },
        ]
    }
])

export default myRouter