import {
  customRender,
  describe,
  expect,
  screen,
  test,
  userEvent,
} from "../utils/utils";
import Search from "../../src/components/ui/Search/Search";

describe("<Search />", () => {
  test("Should render successfully and match snapshot", () => {
    // ARRANGE
    const { asFragment } = customRender(<Search />);

    // ASSERT
    expect(asFragment()).toMatchSnapshot();
  });

  test("Search input field should work as espected", async () => {
    // EVENT
    const user = userEvent.setup();

    // ARRANGE
    customRender(<Search />);

    // ACT
    const searchInput = screen.getByTestId("search-input");

    // ASSERT
    expect(searchInput).toBeInTheDocument();

    // ACT
    await user.type(searchInput, "ferrari toys");

    // ASSERT
    expect(searchInput).toHaveValue("ferrari toys");
  });
});
