import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      
    ]


  },
  

]);

export default router;