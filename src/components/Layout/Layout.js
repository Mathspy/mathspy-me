import React from "react";
import Helmet from "react-helmet";

const Layout = ({ data, children }) => (
  <>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Mathspy's personal website" },
        { name: "keywords", content: "mathspy, blog" },
      ]}
    />
    <div>{children}</div>
  </>
);

export default Layout;
