import React from "react";
import BlogExcerpt from "../../components/BlogExcerpt";

const Blog = ({ edges }) => (
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

export default Blog;
