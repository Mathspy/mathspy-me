import React from "react";

import { css } from "emotion";

import theme from "../../theme";
import prismTheme from "../../prism-theme";

const BlogPost = ({ title, html }) => {
  return (
    <div className={`${blogStyles} ${prismTheme}`}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

const blogStyles = css`
  padding: 10px;

  p,
  ul > li {
    line-height: 1.7;
  }

  p > code {
    background-color: ${theme.mainColorLightened};
  }

  a {
    background-color: #f895544d;
    color: black;
    text-decoration: none;
    padding: 2px 3px;
    border-bottom: solid #0000004d 1px;
  }

  ul li {
    margin-bottom: 7px;
  }

  a:hover {
    background-color: #f89554bf;
    border-bottom-color: black;
  }
`;

export default BlogPost;
