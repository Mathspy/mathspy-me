import React from "react";

import { shallow } from "enzyme";

import MathspyIcon from "../MathspyIcon";

describe("MathspyIcon", () => {
  it("should render my icon!", () => {
    const wrapper = shallow(<MathspyIcon />);

    expect(wrapper).toMatchSnapshot();
  });
});
