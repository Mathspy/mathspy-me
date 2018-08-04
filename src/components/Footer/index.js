import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Footer from "./Footer";

export default ({ pathname }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 4
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
      render={data => {
        const edges = data.allMarkdownRemark.edges
          .filter(edge => edge.node.fields.slug !== pathname)
          .slice(0, 3);
        return (
          <Footer
            links={edges.map(edge => ({
              id: edge.node.id,
              text: edge.node.frontmatter.title,
              url: edge.node.fields.slug,
            }))}
          />
        );
      }}
    />
  );
};
