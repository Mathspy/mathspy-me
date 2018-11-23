import "typeface-cairo";
import React from "react";
import { css } from "emotion";

import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout>
    <h1 className={stylesGreeting}>
      Hi! I am Mathy, thanks for visiting{" "}
      <svg
        height="33px"
        xmlns="http://www.w3.org/2000/svg"
        version="1"
        viewBox="0 0 645 585"
      >
        <path
          d="M297 551a668 668 0 0 0-76-67c-84-63-95-72-129-104C29 323 2 265 3 186c0-38 2-53 13-76 18-38 45-67 79-84 25-13 37-18 77-18 43-1 52 4 77 18 30 17 62 53 68 78l4 16 10-22c56-122 233-120 295 3 20 39 22 123 5 170-23 61-66 108-164 179a937 937 0 0 0-143 128c-6 12-1 2-27-27z"
          fill="#FFF"
        />
      </svg>{" "}
      You can find me everywhere! Feel free to drop by!
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
