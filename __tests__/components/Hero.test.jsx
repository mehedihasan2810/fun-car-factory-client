import { customRender, describe, expect, screen, test } from "../utils/utils";
import Hero from "../../src/components/Hero/Hero";

describe("<Hero/>", () => {
  test("should render successfully and have one heading and button", () => {
    customRender(<Hero />);
    const title = screen.getByRole("heading");
    const button = screen.getByText("Get Now");

    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  test("should match snapshot", () => {
    const { asFragment } = customRender(<Hero />);

    expect(asFragment()).toMatchSnapshot();
  });
});
