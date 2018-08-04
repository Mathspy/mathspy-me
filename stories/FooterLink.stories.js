import React from "react";

import { storiesOf } from "@storybook/react";
import { withBackgrounds } from "@storybook/addon-backgrounds";

import { MemoryRouter } from "react-router";

import FooterLink from "../src/components/Footer/FooterLink";

storiesOf("FooterLink", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .addDecorator(
    withBackgrounds([{ name: "Theme Color", value: "#3d1755", default: true }])
  )
  .add("Simple Link", () => (
    <FooterLink text="I am a link in the footer!" to="/blog/article/" />
  ))
  .add("Simple long link", () => (
    <FooterLink
      text="This link is really really long, it's kind of pointless but yeah"
      to="/blog/longarticle/"
    />
  ));
