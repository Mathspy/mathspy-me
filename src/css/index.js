import { injectGlobal } from "emotion";

injectGlobal`
  html, body {
    height: 100%;
    margin: 0;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e43534;
  }
`;
