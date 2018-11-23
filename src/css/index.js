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
    /* Special thanks to https://www.svgbackgrounds.com/ for this amazing background! */
    background-color: #dd3c3c;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23dc4230' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23da4824' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23d94d18' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23d7530c' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23d65900' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  }
`;
