import React from "react";

import { storiesOf } from "@storybook/react";

import { MemoryRouter } from "react-router";

import NavIcon from "../src/components/NavIcon";

storiesOf("NavIcon", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("Default", () => <NavIcon title="Default" color="#000000" to="/" />)
  .add("With a simple rectangle", () => (
    <NavIcon title="Icon" color="#cccccc" to="/">
      <path d="M32 5 L12 50 L54 50 Z" fill="black" />
    </NavIcon>
  ));
