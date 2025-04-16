import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './component/Home/Home.jsx';
import Mobiles from './component/Mobiles/Mobiles.jsx';
import Users from './component/Users/Users.jsx';
import UserDetails from './component/Users/userDetails.jsx';

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {index: true, Component: Home},
      {path: 'Mobiles', Component: Mobiles},
      {
        path: 'users',
        element: 
        <Suspense>
          <Users usersPromise={usersPromise }></Users>
        </Suspense>
      },
      {
        path: 'users/:userId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(

  

  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
