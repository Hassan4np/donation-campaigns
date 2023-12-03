import { createBrowserRouter } from "react-router-dom";
import Mainpage from "./MainPage/Mainpage";
import Home from "./Home/Home";
import Donation from "./Donation/Donation";
import Statistics from "./Statistics/Statistics";
import CardDetails from "./CardDetails/CardDetails";

const MyBrowser = createBrowserRouter([
    {
        path:"/",
        element:<Mainpage/>,
        children:[
            {
                path:"/",
                element:<Home/>,
                loader:()=>fetch('/data.json')
            },
            {
                path:"/donation",
                element:<Donation/>,
                loader:()=>fetch('/data.json')
            },
            {
                path:"/statistics",
                element:<Statistics/> 
            },
            {
                path:"/card/:id",
                element:<CardDetails/>,
                loader:()=>fetch('/data.json')
            }
        ]
    }
])


export{ MyBrowser}