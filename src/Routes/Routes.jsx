import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../MyPortfolio/Home/Home";
import About from "../MyPortfolio/About/About";
import Services from "../MyPortfolio/Services/Services";
import Projects from "../MyPortfolio/Projects/Projects";
import Contact from "../MyPortfolio/Contact/Contact";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/about",
        element:<About></About>,
      },
      {
        path:"/services",
        element:<Services></Services>,
      },
      {
        path:"/projects",
        element:<Projects></Projects>,
      },
      {
        path:"/contacts",
        element:<Contact></Contact>,
      }
    ],
  },
]);