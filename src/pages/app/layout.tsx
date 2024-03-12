import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React, { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense>
        <NavBar />
      </Suspense>

      <main className="flex-grow">{children}</main>
      <Footer showLoginLink={false} />
    </div>
  );
};

export default Layout;
