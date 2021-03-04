import * as React from "react";
import Header from "./Header";

const Layout: React.FunctionComponent<unknown> = ({ children }) => (
  <div className="bg-gray-100 dark:bg-gray-900 min-h-screen antialiased text-gray-900 dark:text-gray-100">
    <Header />
    <main className="space-y-8 px-8 pb-8 md:px-32 md:pb-32">{children}</main>
  </div>
);

export default Layout;
