import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import { Home } from './pages/Home.jsx';
import { Description } from './pages/Description.jsx';
import { About } from './pages/About.jsx';

const router = createBrowserRouter([
  {
      path: '/',
      element: <Home/>
  },
  {
      path: '/about',
      element: <About/>
  },
  {
      path: '/desc',
      element: <Description/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router}/>
  </StrictMode>,
)
