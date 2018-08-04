import React from "react";
import { css } from "emotion";
import Helmet from "react-helmet";

import NavBar from "../NavBar";
import Footer from "../Footer";

import MathspyIcon from "../static/MathspyIcon";
import ProjectsIcon from "../static/ProjectsIcon";
import BlogIcon from "../static/BlogIcon";

const Layout = ({ data, children }) => (
  <>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Mathspy's personal website" },
        { name: "keywords", content: "mathspy, blog" },
      ]}
    />
    <div className={outterLayoutStyles}>
      <div className={innerLayoutStyles}>
        <NavBar>
          <MathspyIcon />
          <ProjectsIcon />
          <BlogIcon />
        </NavBar>
        <div className={contentStyles}>{children}</div>
      </div>
      <Footer />
    </div>
  </>
);

const innerLayoutStyles = css`
  display: flex;
  flex-direction: column;
  flex: 10;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const outterLayoutStyles = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: 420px) {
    justify-content: space-between;
  }

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

const contentStyles = css`
  @media (min-width: 900px) {
    flex: 1 768px;
  }
`;

export default Layout;
