import * as React from "react";
import Head from "next/head";

type Props = {
  title: string;
  description?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title,
  description,
}) => (
  <div className="bg-gray-100 min-h-screen antialiased text-gray-900">
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main className="space-y-8">{children}</main>
  </div>
);

export default Layout;
