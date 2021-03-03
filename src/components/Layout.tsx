import * as React from "react";

const Layout: React.FunctionComponent<unknown> = ({ children }) => (
  <div className="bg-gray-100 min-h-screen antialiased text-gray-900">
    <main className="space-y-8">{children}</main>
  </div>
);

export default Layout;
