import { configure } from "@storybook/react";
import {
  configureViewport,
  INITIAL_VIEWPORTS,
} from "@storybook/addon-viewport";

import { action } from "@storybook/addon-actions";

//GatsbyLink haxxx:
//This is to prevent ___loader is undefined errors
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
//This is to utilise the window.___navigate method to report what path a GatsbyLink is taking us to
window.___navigate = path => {
  action("NavigateTo:")(path);
};

global.__PATH_PREFIX__ = "/";

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
