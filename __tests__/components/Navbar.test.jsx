import {
  customRender,
  describe,
  expect,
  screen,
  test,
} from "../utils/utils";
import Navbar from "../../src/components/Navbar/Navbar";

describe("<Navbar />", () => {
  test("Should render succesfully", async () => {
    const { asFragment } = customRender(<Navbar />);

    // const { result } = renderHook(useAuthContext, {
    //   wrapper: customWrapper,
    // });

    const button1 = screen.getByText("Home");
    const button2 = screen.getByText("All Toys");
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
