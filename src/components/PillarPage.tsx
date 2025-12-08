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
      <h1 className="page-header mb-10">{pillar}</h1>
      {children}
    </section>
  );
};
