import React from "react";

import TopNav from "../components/Navigation/TopNav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <TopNav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
