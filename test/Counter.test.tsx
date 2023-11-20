import React from "react";
import { render } from "@testing-library/react";
import Test from "../src/Counter";

describe("<Test />", () => {
  it("matches snapshot", () => {
    const utils = render(<Test />);
    expect(utils.container).toMatchSnapshot();
  });
});
