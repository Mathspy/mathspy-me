import React from "react";
import { Link } from "gatsby";

import { shallow, render } from "enzyme";

import NavIcon from "../NavIcon";

describe("NavIcon", () => {
  it("should be a GatsbyLink that contain an svg and a paragraph", () => {
    const wrapper = shallow(<NavIcon />);

    expect(wrapper.is(Link)).toBe(true);
    expect(wrapper.find("svg")).toHaveLength(1);
    expect(wrapper.find("p")).toHaveLength(1);
  });

  it("title property should be used as the paragraph's text", () => {
    const wrapper = shallow(<NavIcon title="testtitle" />);

    expect(wrapper.find("p").text()).toBe("testtitle");
  });

  it("should render the circle and text with color passed", () => {
    const wrapper = shallow(<NavIcon color="#fffccc" />);

    expect(wrapper.find("circle").prop("fill")).toBe("#fffccc");
    expect(wrapper.find("p").prop("style")).toMatchObject({ color: "#fffccc" });
    // TODO: Rewrite above rule using jest-emotion's toHaveStyleRule if possible
  });

  it("should render the children passed to it", () => {
    const wrapper = shallow(
      <NavIcon>
        <path d="M 175 200 l 150 0" />
      </NavIcon>
    );

    expect(wrapper.contains(<path d="M 175 200 l 150 0" />)).toBe(true);
  });

  it("should use the to property as the anchor's href", () => {
    const wrapper = render(<NavIcon to="test/" />);

    expect(wrapper.prop("href")).toBe("test/");
  });
});
