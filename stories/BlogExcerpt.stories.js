import React from "react";

import { storiesOf } from "@storybook/react";
import { withViewport } from "@storybook/addon-viewport";

import BlogExcerpt from "../src/components/BlogExcerpt";

storiesOf("BlogExcerpt", module)
  .addDecorator(withViewport())
  .add("Simple excerpt", () => simpleExcerpt, {
    viewport: "smalldesktop",
  })
  .add("Simple excerpt (iphone 5)", () => simpleExcerpt, {
    viewport: "iphone5",
  });

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ullamcorper odio. Aenean eget fermentum massa. Vivamus maximus, magna ut.";
const simpleExcerpt = (
  <BlogExcerpt title="Test" excerpt={lorem} to={"testland/"} />
);
