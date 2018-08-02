import React from "react";

import { shallow } from "enzyme";

import NavBar from "../NavBar";

describe("NavBar", () => {
  it("should be a simple div", () => {
    const wrapper = shallow(<NavBar />);

    expect(wrapper.is("div")).toBe(true);
  });

  it("should render the children passed to it", () => {
    const wrapper = shallow(
      <NavBar>
        <div className="test" />
      </NavBar>
    );

    expect(wrapper.contains(<div className="test" />)).toBe(true);
  });

  it("should match snapshot", () => {
    const wrapper = shallow(<NavBar />);

    expect(wrapper).toMatchSnapshot();
  });
});
