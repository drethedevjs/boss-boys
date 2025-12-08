import React from "react";
import { NavLink } from "react-router";

export const PillarPage = ({
  pillar,
  children
}: {
  pillar: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="boss-container">
      <h1 className="page-header mb-10">{pillar}</h1>
      {children}
      <NavLink to={{ pathname: "/", hash: "pillars" }}>
        <button className="boss-btn bg-boss-green dark:bg-boss-gold text-white">
          Back
        </button>
      </NavLink>
    </section>
  );
};
