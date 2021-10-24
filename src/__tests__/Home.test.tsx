import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Home from "../pages/Home";

describe("Home", () => {
  it("Home renders without crashing", () => {
    const wrapper = shallow(<Home />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("test search button", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find("#searchBtn").length).toBe(1);
    expect(wrapper.find("#searchBtn").text().includes("Search")).toBe(true);
  });
  it("test search input", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find("#SearchInput").length).toBe(1);
    expect(wrapper.find("#SearchInput").at(0).props().placeholder).toEqual(
      "Search by distance in km"
    );
  });
  describe("Form submit check", () => {
    it("changes submitted state", () => {
      const fakeEvent = { preventDefault: () => console.log("preventDefault") };
      const wrapper = shallow(<Home />);
      expect(wrapper.find("form").length).toEqual(1);
      wrapper.find("form").simulate("submit", fakeEvent);
    });
  });
});
