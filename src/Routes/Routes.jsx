import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../MyPortfolio/Home/Home";
import Resume from "../MyPortfolio/Resume/Resume";



export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
          path: "/",
          element:<Home></Home>,
        },
        {
            path:"/resume",
            element:<Resume></Resume>
        }
      ],
    },
  ]);