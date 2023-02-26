import React, { Component } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Signin from "./pages/Signin/Signin";
import Login from "./pages/Login/Login";
import Ourpro from "./pages/Ourpro/Ourpro";
import Checkp from "./pages/Checkp/Checkp";


import "./app.scss"

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Products",
        element: <Products/>,
      },
  
      {
        path: "/threepawsClub",
        element: <threepawsClub/>,
      },
 
      {
        path: "/Ourpro",
        element: <Ourpro/>,
      },
      {
        path: "/Signin",
        element: <Signin/>,
      },
      {
        path: "/Login",
        element: <Login/>,
      },
      {
        path: "/Checkp",
        element: <Checkp/>,
      },

    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
