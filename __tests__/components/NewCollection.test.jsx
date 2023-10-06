import NewCollection from "../../src/components/NewCollention/NewCollention";
import {
  describe,
  expect,
  renderWithRouter,
  rendererWithRouter,
  screen,
  test,
  toJson,
} from "../utils/utils";

describe("<NewCollection />", () => {
  test("Should render succesfully and there should be a heading, button and two img, ", () => {
    renderWithRouter(<NewCollection />);

    const heading = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === "h4" &&
        content.startsWith("Brand New Toys")
      );
    });
    const button = screen.getByText("Explore");
    const imgs = screen.getAllByRole("img");

    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(imgs.length).toBe(2);
  });

  test("should match snapshot", () => {
    const component = rendererWithRouter(<NewCollection />);
    let tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
