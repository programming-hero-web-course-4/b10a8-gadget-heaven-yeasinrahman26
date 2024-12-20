import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./assets/components/MainLayout";
import Home from "./assets/components/Pages/homePage/Home";
import Statistics from "./assets/components/Pages/Statistics";
import Dashboard from "./assets/components/Pages/Dashboard";
import About from "./assets/components/Pages/About";
import GadgetDetails from "./assets/components/Pages/GadgetDetails";
import { HelmetProvider } from "react-helmet-async";
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
        loader: () => fetch("/gadgetData.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/gadget/:id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch("/gadgetData.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
