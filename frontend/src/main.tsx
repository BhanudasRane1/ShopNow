import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import ProductPage from './pages/ProductPage.tsx'
// import axios from 'axios'
import { HelmetProvider } from 'react-helmet-async'
import { StoreProvider } from './Store'
// axios.defaults.baseURL =
//   process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '/'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CartPage from './pages/CartPage.tsx'
import SigninPage from './pages/SigninPage.tsx'
import SignupPage from './pages/SignupPage.tsx'
import ShippingAddressPage from './pages/ShippingAdressPage.tsx'
import PaymentMethodPage from './pages/PaymentMethodPage.tsx'
import ProtectedRoute from './pages/ProtectedRoute.tsx'
import PlaceOrderPage from './pages/PlaceOrderPage.tsx'
import OrderPage from './pages/OrderPage.tsx'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import OrderHistoryPage from './pages/OrderHistoryPage.tsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path="product/:slug" element={<ProductPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="signin" element={<SigninPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="" element={<ProtectedRoute />}>
        <Route path="shipping" element={<ShippingAddressPage />} />
        <Route path="payment" element={<PaymentMethodPage />} />
        <Route path="placeorder" element={<PlaceOrderPage />} />
        <Route path="/order/:id" element={<OrderPage />} />
        <Route path="/orderhistory" element={<OrderHistoryPage />} />
      </Route>
    </Route>
  )
)
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      {/* <RouterProvider router={router} /> */}
      <PayPalScriptProvider options={{ clientId: 'sb' }} deferLoading={true}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </HelmetProvider>
      </PayPalScriptProvider>
    </StoreProvider>
  </React.StrictMode>
)
