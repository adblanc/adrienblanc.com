import * as React from "react";
import Head from "next/head";
import Header from "./Header";
import UpperCurve from "./UpperCurve";
import LowerCurve from "./LowerCurve";
import Footer from "./Footer";

type Props = {
  title?: string;
  description: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  description,
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
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
    <LowerCurve />
  </>
);

export default Layout;
