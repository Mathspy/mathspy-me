import React from "react";

import { storiesOf } from "@storybook/react";
import { withViewport } from "@storybook/addon-viewport";

import { MemoryRouter } from "react-router";

import BlogMainPage from "../src/components/BlogMainPage";

storiesOf("BlogMainPage", module)
  .addDecorator(withViewport())
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("A single post", () => <BlogMainPage edges={edges.slice(0, 1)} />, {
    viewport: "smalldesktop",
  })
  .add(
    "A single post (iphone 5)",
    () => <BlogMainPage edges={edges.slice(0, 1)} />,
    {
      viewport: "iphone5",
    }
  )
  .add("Multiple posts", () => <BlogMainPage edges={edges} />, {
    viewport: "smalldesktop",
  })
  .add("Multiple posts (iphone 5)", () => <BlogMainPage edges={edges} />, {
    viewport: "iphone5",
  });

const edges = [
  {
    node: {
      id: "0",
      frontmatter: {
        title: "Test 123",
      },
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet viverra.",
      fields: {
        slug: "/blog/test123/",
      },
    },
  },
  {
    node: {
      id: "1",
      frontmatter: {
        title: "Longer title test 123",
      },
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci risus, ultricies et sagittis non, sollicitudin sit amet nisl. Sed tortor turpis.",
      fields: {
        slug: "/blog/test456/",
      },
    },
  },
  {
    node: {
      id: "2",
      frontmatter: {
        title:
          "This is an extremely long title to test how long titles look like",
      },
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at velit sit amet lorem vehicula fermentum.",
      fields: {
        slug: "/blog/test789/",
      },
    },
  },
];
