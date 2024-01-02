import NewCollection from "../../src/components/NewCollention/NewCollention";
import { customRender, describe, expect, screen, test } from "../utils/utils";

describe("<NewCollection />", () => {
  test("Should render succesfully and there should be a heading, button and two img, ", () => {
    // ARRANGE
    customRender(<NewCollection />);

    // ACT
    const heading = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === "h4" &&
        content.startsWith("Brand New Toys")
      );
    });
    const button = screen.getByText("Explore");
    const imgs = screen.getAllByRole("img");
   
    // ASSERT
    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(imgs.length).toEqual(2);
  });

  test("should match snapshot", () => {
    // ARRANGE
    const { asFragment } = customRender(<NewCollection />);

    // ASSERT
    expect(asFragment()).toMatchSnapshot();
  });
});
