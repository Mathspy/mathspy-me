import React from "react";

import { shallow } from "enzyme";

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
