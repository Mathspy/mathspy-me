import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Footer from "./Footer";

export default ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 3
          ) {
            edges {
              node {
                id
                frontmatter {
                  title
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Footer
          links={data.allMarkdownRemark.edges.map(edge => ({
            id: edge.node.id,
            text: edge.node.frontmatter.title,
            url: edge.node.fields.slug,
          }))}
        />
      )}
    />
  );
};
