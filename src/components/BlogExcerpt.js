import React from "react";
import { Link } from "gatsby";

import { css } from "emotion";

import theme from "../theme";

const BlogExcerpt = ({ title, excerpt, to }) => {
  return (
    <div className={`${blogStyles}`}>
      <Link to={to}>
        <h1>{title}</h1>
        <p>{excerpt}</p>
      </Link>
    </div>
  );
};

const blogStyles = css`
  a {
    text-decoration: none;
    color: black;
  }

  &:hover {
    background-color: #f895544d;
  }

  p,
  ul > li {
    line-height: 1.7;
  }

  p > code {
    background-color: ${theme.mainColorLightened};
  }
`;

export default BlogExcerpt;
