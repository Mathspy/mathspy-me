import React from "react";

import { storiesOf } from "@storybook/react";
import { withViewport } from "@storybook/addon-viewport";

import { MemoryRouter } from "react-router";

import Footer from "../src/components/Footer/Footer";

storiesOf("Footer", module)
  .addDecorator(withViewport())
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add(
    "Empty",
    () => (
      <div style={{ display: "flex", height: "500px", width: "227px" }}>
        <Footer links={[]} />
      </div>
    ),
    { viewport: "smalldesktop" }
  )
  .add(
    "Empty (iphone 5)",
    () => (
      //TODO: Figure out if this is the most elegant way to render small components
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Footer links={[]} />
      </div>
    ),
    { viewport: "iphone5" }
  )
  .add(
    "Containing a single link",
    () => (
      <div style={{ display: "flex", height: "500px" }}>
        <Footer links={links.slice(0, 1)} />
      </div>
    ),
    { viewport: "smalldesktop" }
  )
  .add(
    "Containing a single link (iphone 5)",
    () => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Footer links={links.slice(0, 1)} />
      </div>
    ),
    { viewport: "iphone5" }
  )
  .add("Containing several links", () => <Footer links={links} />, {
    viewport: "smalldesktop",
  })
  .add(
    "Containing several links (iphone 5)",
    () => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Footer links={links} />
      </div>
    ),
    { viewport: "iphone5" }
  );

const links = [
  {
    id: "0",
    url: "/blog/123/",
    text: "This blog post loves YOU!",
  },
  {
    id: "1",
    url: "/notblog/123/",
    text: "I am bad at writing good stories!",
  },
  {
    id: "2",
    url: "/otherpage/",
    text:
      "Once upon a time I was making a website with Gatsby, Jest and Storybook, and it was a lot of fun",
  },
  {
    id: "3",
    url: "https://www.google.com",

    text: "How to search and all that",
  },
];
