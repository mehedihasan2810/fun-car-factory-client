import { render, screen } from "@testing-library/react";
import {
  expect,
  test,
  describe,
  vi,
  beforeAll,
  afterAll,
  afterEach,
  beforeEach,
} from "vitest";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "../../src/contexts/AuthProvider";
import userEvent from "@testing-library/user-event";
import ContextProvider from "../../src/contexts/ContextProvider";

// function toJson(component) {
//   const result = component.toJSON();
//   expect(result).toBeDefined();
//   expect(result).not.toBeInstanceOf(Array);
//   return result;
// }

const allTheProviders = ({ children }, ctxValue) => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
      </ContextProvider>
    </BrowserRouter>
  );
};

function customRender(ui, ctxValue, options = {}) {
  return render(ui, {
    wrapper: (children) => allTheProviders(children, ctxValue),
    ...options,
  });
}

// function renderWithRouter(component) {
//   render(component, { wrapper: BrowserRouter });
// }

// function rendererWithRouter(component) {
//   return renderer.create(<BrowserRouter>{component}</BrowserRouter>);
// }

export {
  renderer,
  vi,
  render,
  screen,
  expect,
  test,
  describe,
  // toJson,
  // renderWithRouter,
  // rendererWithRouter,
  customRender,
  allTheProviders as customWrapper,
  beforeAll,
  afterAll,
  afterEach,
  userEvent,
  beforeEach,
};
