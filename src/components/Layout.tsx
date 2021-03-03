import * as React from "react";
import AdrienBlanc from "./AdrienBlanc";

const Layout: React.FunctionComponent<unknown> = ({ children }) => (
  <div className="bg-gray-100 min-h-screen antialiased text-gray-900">
    <AdrienBlanc />
    <main className="space-y-8 px-32 pt-8 pb-32">{children}</main>
  </div>
);

export default Layout;
