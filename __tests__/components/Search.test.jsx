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
    const { asFragment } = customRender(<Search />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Search input field should work as espected", async () => {
    const user = userEvent.setup();

    customRender(<Search />);

    const searchInput = screen.getByTestId("search-input");

    expect(searchInput).toBeInTheDocument();

    await user.type(searchInput, "ferrari toys");

    expect(searchInput).toHaveValue("ferrari toys");
  });
});
