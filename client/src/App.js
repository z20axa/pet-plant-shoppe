import React, { Component } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/product/product";
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

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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
        path: "/products",
        element: <Products/>,
      },
      {
        path: "/product/:id",
        element: <Product/>,
      },
      {
        path: "/threepawsclub",
        element: <threepawsClub/>,
      },
 
      {
        path: "/ourpro",
        element: <Ourpro/>,
      },
      {
        path: "/signin",
        element: <Signin/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/checkp",
        element: <Checkp/>,
      },

    ],
  },
]);

function App() {
  return (
    <div>
        <ApolloProvider client={client}>
      <RouterProvider router={router} />
      </ApolloProvider>
    </div>
  );
}

export default App;
