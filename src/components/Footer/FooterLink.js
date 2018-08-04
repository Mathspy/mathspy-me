import React from "react";
import { Link } from "gatsby";

import { css } from "emotion";

const FooterLink = ({ text, to }) => (
  <Link className={linkStyle} to={to}>
    {text}
  </Link>
);

const linkStyle = css`
  color: white;
  text-decoration: none;

  &:hover {
    color: #e56a17;
  }
`;

export default FooterLink;
