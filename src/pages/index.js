import "typeface-cairo";
import React from "react";
import { css } from "emotion";

import Layout from "../components/Layout";

import Heart from "../components/Icons/Heart";

const IndexPage = () => (
  <Layout>
    <h1 className={stylesGreeting}>
      Hi! I am Mathy, thanks for visiting <Heart height="33px" /> You can find
      me everywhere! Feel free to drop by!
    </h1>
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

export default IndexPage;
