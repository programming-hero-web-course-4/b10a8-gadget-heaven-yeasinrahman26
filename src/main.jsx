import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './assets/components/MainLayout';
import Home from './assets/components/Home';
import Statistics from './assets/components/Pages/Statistics';
import Dashboard from './assets/components/Pages/Dashboard';
import About from './assets/components/Pages/About';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: (
      <div className="text-center mt-52 p-24 font-extrabold space-y-3 text-white  bg-red-600">
        <h2 className="text-5xl">Error page</h2>
        <h2 className="text-xl">Route Not found</h2>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
