import React from "react";

import { shallow } from "enzyme";

import GitHub from "../GitHub";

describe("GitHub", () => {
  it("should render GitHub's icon!", () => {
    const wrapper = shallow(<GitHub />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should pass all properties to the root of the svg", () => {
    const wrapper = shallow(<GitHub test="test" random={123} />);

    expect(wrapper.props()).toMatchObject({ test: "test", random: 123 });
  });
});
