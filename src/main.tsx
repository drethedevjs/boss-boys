import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./assets/css/main.css";
import { RootErrorBoundary } from "./components/RootErrorBoundary";
import RootLayout from "./layouts/RootLayout";
import { About } from "./pages/About";
import { BecomeAMember } from "./pages/BecomeAMember";
import { Brand } from "./pages/Brand";
import { CommunityLeaders } from "./pages/CommunityLeaders";
import { FaithfulHusbands } from "./pages/FaithfulHusbands";
import { Files } from "./pages/Files";
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
    ErrorBoundary: RootErrorBoundary,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "mission-vision",
        element: <MissionVision />
      },
      {
        path: "files",
        element: <Files />
      },
      {
        path: "brand",
        element: <Brand />
      },
      {
        path: "meet-the-mentor",
        element: <MeetTheMentor />
      },
      {
        path: "join",
        element: <BecomeAMember />
      },
      {
        path: "rhythm",
        element: <WeeklyRhythm />
      },
      {
        path: "pledge",
        element: <Pledge />
      },
      {
        path: "pillar",
        children: [
          {
            path: "community-leaders",
            element: <CommunityLeaders />
          },
          {
            path: "faithful-husbands",
            element: <FaithfulHusbands />
          },
          {
            path: "loving-fathers",
            element: <LovingFathers />
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
