import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  SignUpForm,
  LoginForm,
  ForgotPassword,
  OTPVerificationForm,
} from "./components/index.js";
import {
  PNF,
  Home,
  Profile,
  ContactUs,
  PricingPage,
  Shops,
  SingleShop,
  Map,
} from "./pages/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@material-tailwind/react";
import AuthLayout from "./utils/AuthLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthLayout> {/* Wrap entire app with AuthLayout */}
        <App />
      </AuthLayout>
    ),
    children: [
      // Public Routes
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/map",
        element: <Map />,
      },
      {
        path: "/signup",
        element: <SignUpForm />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/verification",
        element: <OTPVerificationForm />,
      },

      // Tailor Registration Routes (Public)
      {
        path: "/tailor/register/basic",
        element: <SignUpForm plan={"basic"} />,
      },
      {
        path: "/tailor/register/standard",
        element: <SignUpForm plan={"standard"} />,
      },
      {
        path: "/tailor/register/premium",
        element: <SignUpForm plan={"premium"} />,
      },

      // Secure Routes
      {
        path: "/profile",
        element: <Profile />,
      },

      // Public Pages
      {
        path: "/shops",
        element: <Shops />,
      },
      {
        path: "/shop/:id",
        element: <SingleShop />,
      },
      {
        path: "/pricing-plans",
        element: <PricingPage />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },

      // Catch-All Route
      {
        path: "/*",
        element: <PNF />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
