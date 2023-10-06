import { render } from "@testing-library/react";
import { expect, test, describe } from "vitest";
// import renderer from "react-test-renderer";
import NewCollection from "../src/components/NewCollention/NewCollention";

// function toJson(component) {
//   const result = component.toJSON()
//   expect(result).toBeDefined()
//    expect(result).not.toBeInstanceOf(Array)
//   return result;
// }

describe("fooo", () => {
  test("Hero", () => {
    render(<NewCollection />);
    // const component = renderer.create(<Hero />);

    // let tree = component.toJSON();
    // expect(tree).toMatchSnapshot();

    expect(2).toBe(2);
  });
});
