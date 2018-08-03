import React from "react";
import { Link } from "gatsby";

import { shallow } from "enzyme";

import BlogExcerpt from "../BlogExcerpt";

describe("BlogExcerpt", () => {
  it("should be a div containing a single GatsbyLink", () => {
    const wrapper = shallow(<BlogExcerpt />);

    expect(wrapper.is("div")).toBe(true);
    expect(wrapper.children().is(Link)).toBe(true);
  });

  it("should display the title passed to it", () => {
    const wrapper = shallow(<BlogExcerpt title="testtitle" />);

    expect(wrapper.find("h1").text()).toBe("testtitle");
  });

  it("should display the excerpt passed to it", () => {
    const wrapper = shallow(<BlogExcerpt excerpt="testexcerpt" />);

    expect(wrapper.find("p").text()).toBe("testexcerpt");
  });

  it("should match snapshot", () => {
    const wrapper = shallow(<BlogExcerpt />);

    expect(wrapper).toMatchSnapshot();
  });
});
