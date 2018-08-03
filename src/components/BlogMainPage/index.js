import React from "react";
import BlogExcerpt from "../BlogExcerpt";

const BlogMainPage = ({ edges }) => (
  <div>
    {edges.map(({ node }) => (
      <BlogExcerpt
        key={node.id}
        title={node.frontmatter.title}
        excerpt={node.excerpt}
        to={node.fields.slug}
      />
    ))}
  </div>
);

export default BlogMainPage;
