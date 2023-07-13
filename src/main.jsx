import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextGlobalProvider from './context/ContextGlobal.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetail from './components/ProductDetail/index.jsx'
import Layout from './components/Layout/index.jsx'
import ErrorPage from './View/ErrorPage.jsx'
import CartPage from './View/CartPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: 'product/:id/:name',
    element: <ProductDetail />
  },
  {
    path: 'cart',
    element: <CartPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextGlobalProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ContextGlobalProvider>
  </React.StrictMode>
)
