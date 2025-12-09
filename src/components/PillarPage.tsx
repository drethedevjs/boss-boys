import React from "react";

export const PillarPage = ({
  pillar,
  children
}: {
  pillar: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="boss-container">
      <h1 className="page-header">{pillar}</h1>
      {children}
    </section>
  );
};
