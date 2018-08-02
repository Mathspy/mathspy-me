//This file doesn't contain any actual stories but is simply a setup for other stories

import { action } from "@storybook/addon-actions";

//GatsbyLink haxxx:
//This is to prevent ___loader is undefined errors
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
//This is to utilise the window.___push method to report what path a GatsbyLink is taking us to
window.___push = ({ pathname }) => {
  action("NavigateTo:")(pathname);
};
