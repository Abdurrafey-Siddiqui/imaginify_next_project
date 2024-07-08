import React from "react";
import Sidebar from "@/components/shared/Sidebar";
import MobileNav from "@/components/shared/MobileNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex-row md:flex min-h-screen h-full">
      <Sidebar />
      <MobileNav />

      <div className="flex-1">
        <div className="">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
