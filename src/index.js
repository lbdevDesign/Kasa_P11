import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound'
import Logement from './pages/Logement'

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
    path: "/logement/:id",
    element: <Logement />,
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


