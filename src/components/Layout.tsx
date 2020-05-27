import * as React from "react";
import Head from "next/head";
import UpperCurve from "./Curves/UpperCurve";
import LowerCurve from "./Curves/LowerCurve";

type Props = {
  title?: string;
  description: string;
  noUpperCurve?: boolean;
  noLowerCurve?: boolean;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  description,
  noUpperCurve,
  noLowerCurve,
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
    {!noUpperCurve && <UpperCurve />}
    <div className="content-container">
      <main>{children}</main>
    </div>
    {!noLowerCurve && <LowerCurve />}
  </>
);

export default Layout;
