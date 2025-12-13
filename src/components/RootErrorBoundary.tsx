import { isRouteErrorResponse, NavLink, useRouteError } from "react-router";
import { Navbar } from "./Navbar";

export const RootErrorBoundary = () => {
  let error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <Navbar />
        <div className="boss-container grid place-items-center text-center min-h-[calc(100vh-var(--nav-height))]">
          <div>
            <h1 className="lg:text-9xl text-6xl font-bold">{error.status}</h1>
            <h2>{error.statusText}</h2>
            <p>{error.data}</p>
            <NavLink
              to="/"
              className="boss-btn text-white ring-1 ring-boss-green bg-boss-green hover:bg-white hover:text-boss-green dark:ring-boss-gold dark:bg-boss-gold dark:hover:bg-transparent dark:hover:text-boss-gold"
            >
              Go Back Home
            </NavLink>
          </div>
        </div>
      </>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
};
