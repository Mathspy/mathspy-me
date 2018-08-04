import React from "react";

import { css } from "emotion";

import FooterLink from "./FooterLink";

const Footer = ({ links }) => (
  <div className={containerStyle}>
    <h2>Other recordings of my adventures:</h2>
    <div className={wrapperStyle}>
      {links.map(link => (
        <FooterLink key={link.id} to={link.url} text={link.text} />
      ))}
    </div>
  </div>
);

const containerStyle = css`
  background-color: #3d1755;
  padding: 7px;

  h2 {
    color: white;
    margin: 10px 0;
  }

  @media (min-width: 420px) {
    padding: 12px;
  }

  @media (min-width: 900px) {
    padding: 17px;
    flex: 3;
    max-width: 368px;
  }
`;

const wrapperStyle = css`
  padding-left: 20px;
  border-left: solid 1px #e56a17;
  a {
    display: block;
    margin-bottom: 8px;
  }
`;

export default Footer;
