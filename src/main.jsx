import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SignInForm, LoginForm, ForgotPassword, OTPVerificationForm } from "./components/index.js"
import { PNF, Home, Profile } from "./pages/index.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/signup',
        element: <SignInForm />,
      },
      {
        path: '/login',
        element: <LoginForm />,
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: '/verification',
        element: <OTPVerificationForm />,
      },

      {
        path: '/profile',
        element: <Profile />,
      },

      {
        path: '/*',
        element: <PNF />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
