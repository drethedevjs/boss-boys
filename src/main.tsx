import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./assets/css/main.css";
import { RootErrorBoundary } from "./components/RootErrorBoundary";
import RootLayout from "./layouts/RootLayout";
import { About } from "./pages/About";
import Home from "./pages/Home";
import { MeetTheMentor } from "./pages/MeetTheMentor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        ErrorBoundary: RootErrorBoundary
      },
      {
        path: "about",
        element: <About />,
        ErrorBoundary: RootErrorBoundary
      },
      {
        path: "meet-the-mentor",
        element: <MeetTheMentor />,
        ErrorBoundary: RootErrorBoundary
      }
    ]
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
