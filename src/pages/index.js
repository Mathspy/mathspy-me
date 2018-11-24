import "typeface-cairo";
import React from "react";
import { css } from "emotion";

import Layout from "../components/Layout";

import Heart from "../components/Icons/Heart";
import Twitter from "../components/Icons/Twitter";
import GitHub from "../components/Icons/GitHub";

const IndexPage = () => (
  <Layout>
    <h1 className={stylesGreeting}>
      Hi! I am Mathy, thanks for visiting <Heart height="33px" /> You can find
      me everywhere! Feel free to drop by!
    </h1>
    <div className={stylesIcons}>
      <a
        href="https://github.com/mathspy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub />
      </a>
      <a
        href="https://twitter.com/mathspy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter />
      </a>
    </div>
  </Layout>
);

const stylesGreeting = css`
  color: white;
  font-family: "Cairo", sans-serif;
  font-weight: 400;
  text-align: center;
  font-size: 44px;
  line-height: 1.5em;
`;

const stylesIcons = css`
  display: flex;
  justify-content: center;
  svg {
    margin: 0 10px;
    height: 32px;
  }
  path {
    fill: #fff;
  }
`;

export default IndexPage;
