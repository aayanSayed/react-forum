import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Posts from "./Components/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },

  {
    path: "/About",
    element: <About />
  
  },
    
  {
    path: "/Posts",
    element: <Posts />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
