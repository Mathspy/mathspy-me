import React from "react";

import { shallow } from "enzyme";

import BlogIcon from "../BlogIcon";

describe("BlogIcon", () => {
  it("should render the blog icon!", () => {
    const wrapper = shallow(<BlogIcon />);

    expect(wrapper).toMatchSnapshot();
  });
});
