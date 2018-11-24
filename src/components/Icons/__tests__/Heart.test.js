import React from "react";

import { shallow } from "enzyme";

import Heart from "../Heart";

describe("Heart", () => {
  it("should render Heart's icon!", () => {
    const wrapper = shallow(<Heart />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should pass all properties to the root of the svg", () => {
    const wrapper = shallow(<Heart test="test" random={123} />);

    expect(wrapper.props()).toMatchObject({ test: "test", random: 123 });
  });
});
