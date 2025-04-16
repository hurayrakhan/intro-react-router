import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Home/Home.jsx';
import Mobiles from './Mobiles/Mobiles.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {index: true, Component: Home},
      {path: 'Mobiles', Component: Mobiles}
    ]
  },
]);

createRoot(document.getElementById('root')).render(

  

  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
