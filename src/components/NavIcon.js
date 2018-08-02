import React from "react";
import { Link } from "gatsby";

import { css } from "emotion";

const NavIcon = ({ title, color, children, to }) => (
  <Link className={containerStyle} to={to}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="32" fill={color} />
      {children}
    </svg>
    <p className={titleStyle} style={{ color }}>
      {title}
    </p>
  </Link>
);

const containerStyle = css`
  width: 64px;
  display: inline-block;
`;

const titleStyle = css`
  margin: 4px;
  font-size: 9.5px;
  font-family: Segoe UI, sans-serif;
  text-align: center;
`;

export default NavIcon;
