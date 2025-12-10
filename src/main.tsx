import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./assets/css/main.css";
import { RootErrorBoundary } from "./components/RootErrorBoundary";
import RootLayout from "./layouts/RootLayout";
import { About } from "./pages/About";
import { BecomeAMember } from "./pages/BecomeAMember";
import { CommunityLeaders } from "./pages/CommunityLeaders";
import { FaithfulHusbands } from "./pages/FaithfulHusbands";
import Home from "./pages/Home";
import { LovingFathers } from "./pages/LovingFathers";
import { MeetTheMentor } from "./pages/MeetTheMentor";
import { MissionVision } from "./pages/MissionVision";
import { Pledge } from "./pages/Pledge";
import { WeeklyRhythm } from "./pages/WeeklyRhythm";

const scrollMiddleware = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    middleware: [scrollMiddleware],
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
        path: "mission-vision",
        element: <MissionVision />,
        ErrorBoundary: RootErrorBoundary
      },
      {
        path: "meet-the-mentor",
        element: <MeetTheMentor />,
        ErrorBoundary: RootErrorBoundary
      },
      {
        path: "join",
        element: <BecomeAMember />,
        ErrorBoundary: RootErrorBoundary
      },
      {
        path: "rhythm",
        element: <WeeklyRhythm />,
        ErrorBoundary: RootErrorBoundary
      },
      {
        path: "pledge",
        element: <Pledge />,
        ErrorBoundary: RootErrorBoundary
      },
      {
        path: "pillar",
        children: [
          {
            path: "community-leaders",
            element: <CommunityLeaders />,
            ErrorBoundary: RootErrorBoundary
          },
          {
            path: "faithful-husbands",
            element: <FaithfulHusbands />,
            ErrorBoundary: RootErrorBoundary
          },
          {
            path: "loving-fathers",
            element: <LovingFathers />,
            ErrorBoundary: RootErrorBoundary
          }
        ],
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
