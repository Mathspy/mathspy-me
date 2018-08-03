import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";

import BlogMainPage from "../../components/BlogMainPage";

export default ({ data }) => {
  return (
    <Layout>
      <BlogMainPage edges={data.allMarkdownRemark.edges || []} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
