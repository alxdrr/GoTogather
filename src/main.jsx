import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import OnboardingPage from "./pages/OnboardingPage.jsx";
import MainPage from "./pages/MainPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <OnboardingPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
