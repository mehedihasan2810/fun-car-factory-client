import { customRender, describe, expect, screen, test } from "../utils/utils";
import Navbar from "../../src/components/Navbar/Navbar";

describe("<Navbar />", () => {
  let currentUser = {
    displayName: "Mehedi Hasan",
    email: "test@gmail.com",
    photoURL: "https://img.com",
  };

  test("Should render successfully", () => {
    // ARRANGE
    customRender(<Navbar />, { currentUser });
  });

  test("Should work everything in accordance with the presence of currentUser", () => {
    // ARRANGE
    customRender(<Navbar />, { currentUser });
    
    // ASSERT
    expect(screen.queryByText("Sign In")).not.toBeInTheDocument();
    expect(screen.getByText("Sign Out")).toBeInTheDocument();
  });

  test("Should work everything in accordance with not in the presence of currentUser", () => {
    currentUser = null;
    // ARRANGE
    customRender(<Navbar />, { currentUser });
    
    // ASSERT
    expect(screen.queryByText("Sign In")).toBeInTheDocument();
    expect(screen.queryByText("Sign Out")).not.toBeInTheDocument();
  });
});
