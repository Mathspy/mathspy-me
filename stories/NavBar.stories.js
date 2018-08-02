import React from "react";

import { storiesOf } from "@storybook/react";
import { withViewport } from "@storybook/addon-viewport";

import { MemoryRouter } from "react-router";

import NavBar from "../src/components/NavBar";

import MathspyIcon from "../src/components/static/MathspyIcon";
import ProjectsIcon from "../src/components/static/ProjectsIcon";
import BlogIcon from "../src/components/static/BlogIcon";

storiesOf("NavBar", module)
  .addDecorator(withViewport())
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add(
    "Empty",
    () => (
      <div style={{ display: "flex", height: "500px", width: "227px" }}>
        <NavBar />
      </div>
    ),
    { viewport: "smalldesktop" }
  )
  .add(
    "Containing a single icon",
    () => (
      <div style={{ display: "flex", height: "500px", width: "227px" }}>
        <NavBar>
          <MathspyIcon />
        </NavBar>
      </div>
    ),
    { viewport: "smalldesktop" }
  )
  .add(
    "Containing all icons",
    () => (
      <div style={{ display: "flex", height: "500px", width: "227px" }}>
        <NavBar>
          <MathspyIcon />
          <ProjectsIcon />
          <BlogIcon />
        </NavBar>
      </div>
    ),
    { viewport: "smalldesktop" }
  )
  .add(
    "Containing all icons (iPhone 5)",
    () => (
      <NavBar>
        <MathspyIcon />
        <ProjectsIcon />
        <BlogIcon />
      </NavBar>
    ),
    { viewport: "iphone5" }
  )
  .add(
    "Containing all icons (iPad)",
    () => (
      <div style={{ display: "flex", height: "500px", width: "100px" }}>
        <NavBar>
          <MathspyIcon />
          <ProjectsIcon />
          <BlogIcon />
        </NavBar>
      </div>
    ),
    { viewport: "ipad" }
  );
