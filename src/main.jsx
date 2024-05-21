import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import Home from './components/home/Home';
import Appliedjobs from './components/Pages/Appliedjobs';
import Errorpage from './components/Pages/Errorpage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/applied-jobs",
        element: <Appliedjobs />
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
