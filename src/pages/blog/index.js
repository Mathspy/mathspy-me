import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";

import Blog from "./Blog";

export default ({ data }) => {
  return (
    <Layout>
      <Blog edges={data.allMarkdownRemark.edges} />
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

/*
<div key={node.id}>
  <Link
    to={node.fields.slug}
    className={css`
      text-decoration: none;
      color: inherit;
    `}
  >

    <h3
      className={css`
        margin-bottom: 5px;
      `}
    >

      {node.frontmatter.title}{" "}
      <span
        className={css`
          color: #bbb;
        `}
      >
        — {node.frontmatter.date}
      </span>
    </h3>
    <p>{node.excerpt}</p>
  </Link>
</div>
*/
