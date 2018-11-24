import React from "react";

import { shallow } from "enzyme";

import Twitter from "../Twitter";

describe("Twitter", () => {
  it("should render Twitter's icon!", () => {
    const wrapper = shallow(<Twitter />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should pass all properties to the root of the svg", () => {
    const wrapper = shallow(<Twitter test="test" random={123} />);

    expect(wrapper.props()).toMatchObject({ test: "test", random: 123 });
  });
});
