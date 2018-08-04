import React from "react";
import { StaticQuery } from "gatsby";

import { shallow } from "enzyme";

import FooterWrapper from "../Footer";
import Footer from "../Footer/Footer";
import FooterLink from "../Footer/FooterLink";

describe("Footer", () => {
  it("should be a div containing a catchphrase and another div", () => {
    const wrapper = shallow(<Footer links={[]} />);

    expect(wrapper.is("div")).toBe(true);
    expect(
      wrapper
        .children()
        .first()
        .is("h2")
    ).toBe(true);
    expect(
      wrapper
        .children()
        .last()
        .is("div")
    ).toBe(true);
  });

  it("should render the links passed to it as FooterLinks", () => {
    const wrapper = shallow(<Footer links={links} />);

    expect(wrapper.find(FooterLink)).toHaveLength(4);
  });

  it("should match snapshot", () => {
    const wrapper = shallow(<Footer links={links} />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe("FooterWrapper", () => {
  it("should be a StaticQuery component", () => {
    const wrapper = shallow(<FooterWrapper />);

    expect(wrapper.is(StaticQuery)).toBe(true);
  });

  it("should render a Footer if given correct data", () => {
    const wrapper = shallow(<FooterWrapper />);

    const inner = wrapper.prop("render")(data);

    expect(inner.type).toBe(Footer);
    expect(inner.props).toEqual({ links });
  });
});

const links = [
  {
    id: "b0c47058-0f4d-5488-81fa-40268a59e0b2",
    url: "/blog/123/",
    text: "This blog post loves YOU!",
  },
  {
    id: "2b08de1d-66cd-4108-adcc-4c1b5900a697",
    url: "/notblog/123/",
    text: "I am bad at writing good stories!",
  },
  {
    id: "48024e6d-e4a2-4e67-9841-eb9f6a362064",
    url: "/otherpage/",
    text:
      "Once upon a time I was making a website with Gatsby, Jest and Storybook, and it was a lot of fun",
  },
  {
    id: "bbe2062c-fb61-4935-9385-306d1c5af8ca",
    url: "https://www.google.com",
    text: "How to search and all that",
  },
];

const data = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          id: "b0c47058-0f4d-5488-81fa-40268a59e0b2",
          frontmatter: {
            title: "This blog post loves YOU!",
          },
          fields: {
            slug: "/blog/123/",
          },
        },
      },
      {
        node: {
          id: "2b08de1d-66cd-4108-adcc-4c1b5900a697",
          frontmatter: {
            title: "I am bad at writing good stories!",
          },
          fields: {
            slug: "/notblog/123/",
          },
        },
      },
      {
        node: {
          id: "48024e6d-e4a2-4e67-9841-eb9f6a362064",
          frontmatter: {
            title:
              "Once upon a time I was making a website with Gatsby, Jest and Storybook, and it was a lot of fun",
          },
          fields: {
            slug: "/otherpage/",
          },
        },
      },
      {
        node: {
          id: "bbe2062c-fb61-4935-9385-306d1c5af8ca",
          frontmatter: {
            title: "How to search and all that",
          },
          fields: {
            slug: "https://www.google.com",
          },
        },
      },
    ],
  },
};
