import * as React from "react";
import Navbar from "./Navbar";

const Layout: React.FunctionComponent<unknown> = ({ children }) => (
  <div className="bg-gray-100 dark:bg-gray-900 min-h-screen antialiased text-gray-900 dark:text-gray-100 transition-colors ease-in-out duration-100">
    <Navbar />
    <main className="space-y-8 p-8 md:px-32 md:pb-32">{children}</main>
  </div>
);

export default Layout;
