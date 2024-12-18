import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SignInForm, LoginForm, ForgotPassword, OTPVerificationForm } from "./components/index.js"
import { PNF, Home, Profile, ContactUs, LandingPage, PricingPage } from "./pages/index.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ThemeProvider } from "@material-tailwind/react";
import SignUpForm from './components/auth/Signup.jsx'

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
        path: '/landingpage',
        element: <LandingPage />,
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
        path: '/tailor/register/basic',
        element: <SignUpForm plan={"basic"} />,
      },
      {
        path: '/tailor/register/standard',
        element: <SignUpForm plan={"standard"} />,
      },
      {
        path: '/tailor/register/premium',
        element: <SignUpForm plan={"premium"} />,
      },

      {
        path: '/pricing-plans',
        element: <PricingPage />,
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
