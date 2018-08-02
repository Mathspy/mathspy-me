import { configure } from "@storybook/react";
import {
  configureViewport,
  INITIAL_VIEWPORTS,
} from "@storybook/addon-viewport";

const newViewports = {
  iphonex: {
    name: "iPhone X",
    styles: {
      width: "375px",
      height: "812px",
    },
    type: "mobile",
  },
  smalldesktop: {
    name: "1366 desktop",
    styles: {
      width: "1366px",
      height: "768px",
    },
    type: "dekstop",
  },
};

configureViewport({
  viewports: {
    ...INITIAL_VIEWPORTS,
    ...newViewports,
  },
});

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
