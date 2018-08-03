import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";

import BlogPost from "./BlogPost";

export default ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout>
      <BlogPost title={frontmatter.title} html={html} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
