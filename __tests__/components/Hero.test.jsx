import { customRender, describe, expect, screen, test } from "../utils/utils";
import Hero from "../../src/components/Hero/Hero";

describe("<Hero/>", () => {
  test("should render successfully and have one heading and button", () => {
    // ARRANGE
    customRender(<Hero />);

    // ACT
    const title = screen.getByRole("heading");
    const button = screen.getByText("Get Now");

    // ASSERT
    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  test("should match snapshot", () => {
    // ARRANGE
    const { asFragment } = customRender(<Hero />);

    // ASSERT
    expect(asFragment()).toMatchSnapshot();
  });
});
