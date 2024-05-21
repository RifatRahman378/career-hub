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
import Statistics from './components/Pages/Statistics';
import Blog from './components/Pages/Blog';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path:"/statistics",
        element: <Statistics/>
      },
      {
        path: "/applied-jobs",
        element: <Appliedjobs />
      },
      {
        path: "/blog",
        element: <Blog/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
