import React from "react";

import { shallow } from "enzyme";

import BlogMainPage from "../BlogMainPage";
import BlogMainPageWrapper from "../../pages/blog";

import BlogExcerpt from "../BlogExcerpt";
import Layout from "../Layout";

describe("BlogMainPage", () => {
  it("should be a empty div if empty edges array was passed to it", () => {
    const wrapper = shallow(<BlogMainPage edges={[]} />);

    expect(wrapper.is("div")).toBe(true);
    expect(wrapper.children()).toHaveLength(0);
  });

  it("should contain as many BlogExcerpt as edges passed", () => {
    const wrapper = shallow(
      <BlogMainPage edges={data.allMarkdownRemark.edges} />
    );

    expect(wrapper.children()).toHaveLength(3);
    expect(wrapper.find(BlogExcerpt)).toHaveLength(3);
  });
});

describe("BlogMainPageWrapper", () => {
  it("should render a BlogMainPage and surround it with Layout", () => {
    const wrapper = shallow(<BlogMainPageWrapper data={data} />);
    expect(wrapper.is(Layout)).toBe(true);
    expect(wrapper.find(BlogMainPage)).toHaveLength(1);
  });

  it("should pass all the edges to the BlogMainPage", () => {
    const wrapper = shallow(<BlogMainPageWrapper data={data} />);

    expect(wrapper.find(BlogMainPage).props()).toEqual({
      edges: data.allMarkdownRemark.edges,
    });
  });
});

const data = {
  allMarkdownRemark: {
    totalCount: 3,
    edges: [
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
    ],
  },
};
