import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SignInForm, LoginForm, ForgotPassword, OTPVerificationForm } from "./components/index.js"
import { PNF, Home, Profile, ContactUs } from "./pages/index.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ThemeProvider } from "@material-tailwind/react";

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
        path: '/contactus',
        element: <ContactUs />,
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
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
