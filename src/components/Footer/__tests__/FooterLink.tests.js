import React from "react";
import { Link } from "gatsby";

import { shallow, render } from "enzyme";

import FooterLink from "../FooterLink";

describe("FooterLink", () => {
  it("should render a GatsbyLink", () => {
    const wrapper = shallow(<FooterLink />);

    expect(wrapper.is(Link)).toBe(true);
  });

  it("should contain the text passed to it", () => {
    const wrapper = render(<FooterLink text="testtext" />);

    expect(wrapper.text()).toBe("testtext");
  });

  it("should use the to property as the anchor's href", () => {
    const wrapper = render(<FooterLink to="test/" />);

    expect(wrapper.prop("href")).toBe("test/");
  });
});
