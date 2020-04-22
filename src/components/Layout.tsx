import * as React from "react";
import Head from "next/head";
import Header from "./Header";
import UpperCurve from "./UpperCurve";
import LowerCurve from "./LowerCurve";

type Props = {
  title?: string;
  description: string;
  displayHeader?: boolean;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  description,
  displayHeader,
  title = "This is the default title",
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <link rel="icon" type="image/png" href="/fav.png" />
    </Head>
    <UpperCurve />
    <div className="content-container">
      {displayHeader && <Header />}
      <main>{children}</main>
    </div>
    <LowerCurve />
  </>
);

export default Layout;
