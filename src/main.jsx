import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextGlobalProvider from './context/ContextGlobal.jsx'
import StoreContextProvider from './context/StoreContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetail from './View/ProductDetail/index.jsx'
import Layout from './components/Layout/index.jsx'
import ErrorPage from './View/ErrorPage.jsx'
import User from './View/User/index.jsx'
import Login from './View/Login/index.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />

  },
  {
    path: 'producto/:id',
    element: <ProductDetail />
  },
  {
    path: 'user',
    element:
    <PrivateRoute>
      <User />
    </PrivateRoute>
  },
  {
    path: 'login',
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextGlobalProvider>
    <StoreContextProvider>
      <Layout >
        <RouterProvider router={router} />
      </Layout>
    </StoreContextProvider>
    </ContextGlobalProvider>
  </React.StrictMode>
)
