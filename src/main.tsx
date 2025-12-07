import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./assets/css/main.css";
import { RootErrorBoundary } from "./components/RootErrorBoundary";
import RootLayout from "./layouts/RootLayout";
import { About } from "./pages/About";
import { CommunityLeaders } from "./pages/CommunityLeaders";
import { FaithfulHusbands } from "./pages/FaithfulHusbands";
import Home from "./pages/Home";
import { LovingFathers } from "./pages/LovingFathers";
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
      },
      {
        path: "pillar/community-leaders",
        element: <CommunityLeaders />,
        ErrorBoundary: RootErrorBoundary
      },
      {
        path: "pillar/faithful-husbands",
        element: <FaithfulHusbands />,
        ErrorBoundary: RootErrorBoundary
      },
      {
        path: "pillar/loving-fathers",
        element: <LovingFathers />,
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
