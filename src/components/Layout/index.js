import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

//Global styles
import "../../css/index.js";

import InnerLayout from "./Layout";

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <InnerLayout data={data}>{children}</InnerLayout>}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
