import React from "react";

import { shallow } from "enzyme";

import ProjectsIcon from "../ProjectsIcon";

describe("ProjectsIcon", () => {
  it("should render the projects icon!", () => {
    const wrapper = shallow(<ProjectsIcon />);

    expect(wrapper).toMatchSnapshot();
  });
});
