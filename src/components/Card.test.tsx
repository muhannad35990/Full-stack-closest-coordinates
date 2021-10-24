import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Card from "./Card";

describe("Card", () => {
  it("Card renders without crashing", () => {
    const props = {
      organization: "",
      customerLocations: "",
      services: "",
      willWorkRemotely: false,
      offices: [],
    };
    const wrapper = shallow(<Card {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
