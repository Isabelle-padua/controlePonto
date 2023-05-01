import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './routes/home/Home';
import PontoEntrada from './routes/pontoEntrada/PontoEntrada';
import PontoSaida from './routes/pontoSaida/PontoSaida';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/pontosEntrada/:chave",
        element: <PontoEntrada />
      },
      {
        path: "/pontosSaida/:chave",
        element: <PontoSaida />
      },
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals