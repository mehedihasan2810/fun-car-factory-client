import {
  describe,
  expect,
  renderWithRouter,
  rendererWithRouter,
  screen,
  test,
  toJson,
} from "../utils/utils";
import Hero from "../../src/components/Hero/Hero";

describe("<Hero/>", () => {
  test("should render successfully and have one heading and button", () => {
    renderWithRouter(<Hero />);
    const title = screen.getByRole("heading");
    const button = screen.getByText("Get Now");

    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  test("should match snapshot", () => {
    const component = rendererWithRouter(<Hero />);
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
  });
});
