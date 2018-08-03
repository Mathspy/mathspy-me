import React from "react";

import { shallow, render } from "enzyme";

import BlogPost from "../BlogPost/BlogPost.js";
import BlogPostWrapper from "../BlogPost";

import Layout from "../../components/Layout";

const data = {
  markdownRemark: {
    html: "<h1>Test HTML</h1>",
    frontmatter: {
      title: "Markdown Test!",
    },
  },
};

describe("BlogPost", () => {
  it("should be a simple div containing an h1 and another div", () => {
    const wrapper = shallow(<BlogPost />);

    expect(wrapper.is("div")).toBe(true);
    expect(
      wrapper
        .children()
        .first()
        .is("h1")
    ).toBe(true);
    expect(
      wrapper
        .children()
        .last()
        .is("div")
    ).toBe(true);
  });

  it("should display the title passed to it", () => {
    const wrapper = shallow(<BlogPost title="testtitle" />);

    expect(wrapper.find("h1").text()).toBe("testtitle");
  });

  it("should render the html passed to it", () => {
    const wrapper = render(<BlogPost html="<div class=&quot;test&quot; />" />);

    expect(wrapper.find("div.test")).toHaveLength(1);
  });

  it("should match snapshot", () => {
    const wrapper = shallow(<BlogPost />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe("BlogPostWrapper", () => {
  it("should render a BlogPost and surround it with Layout", () => {
    const wrapper = shallow(<BlogPostWrapper data={data} />);
    expect(wrapper.is(Layout)).toBe(true);
    expect(wrapper.find(BlogPost)).toHaveLength(1);
  });

  it("should pass to it the title and html", () => {
    const wrapper = shallow(<BlogPostWrapper data={data} />);
    expect(wrapper.find(BlogPost).props()).toEqual({
      title: data.markdownRemark.frontmatter.title,
      html: data.markdownRemark.html,
    });
  });
});
