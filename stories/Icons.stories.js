import React from "react";

import { storiesOf } from "@storybook/react";

import { MemoryRouter } from "react-router";

import MathspyIcon from "../src/components/static/MathspyIcon";
import ProjectsIcon from "../src/components/static/ProjectsIcon";
import BlogIcon from "../src/components/static/BlogIcon";

storiesOf("Icons", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("MathspyIcon", () => <MathspyIcon />)
  .add("ProjectsIcon", () => <ProjectsIcon />)
  .add("BlogIcon", () => <BlogIcon />);
