import React from "react";

export const BossPage = ({
  header = "",
  children
}: {
  header?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="boss-container">
      {header && <h1 className="page-header">{header}</h1>}
      {children}
    </div>
  );
};
