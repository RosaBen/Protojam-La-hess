import React from 'react';
import ReactDOM from 'react-dom/client';
import { getListProduct } from './services/request.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BasketProvider } from './context/BasketContext';
import App from './App.jsx';
import Home from './pages/Home';
import './styles/home.css';
import './index.css';
import './styles/filter.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: getListProduct,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasketProvider>
      <RouterProvider router={router} />
    </BasketProvider>
  </React.StrictMode>,
);
