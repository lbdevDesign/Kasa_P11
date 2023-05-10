import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componants/Home';
import About from './componants/About';
import PageNotFound from './componants/PageNotFound'
import Logement from './componants/Logement'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/logement",
    element: <Logement />,
  },
  {
    path: "/a-propos",
    element: <About />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


