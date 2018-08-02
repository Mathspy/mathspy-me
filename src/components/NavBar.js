import React from "react";

import { css } from "emotion";

const NavIcon = ({ children }) => (
  <div className={containerStyle}>{children}</div>
);

const containerStyle = css`
  display: flex;
  background-color: #3d1755;
  align-items: center;
  justify-content: space-between;
  padding: 11px;

  @media (min-width: 420px) {
    justify-content: flex-start;
    padding: 10px;
    flex: 2;
    flex-direction: column;
  }

  @media (min-width: 900px) {
    padding: 17px;
  }
`;

export default NavIcon;
