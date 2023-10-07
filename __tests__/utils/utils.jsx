import { render, screen } from "@testing-library/react";
import { expect, test, describe, vi } from "vitest";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../../src/contexts/AuthProvider";

function toJson(component) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result;
}

const allTheProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <AuthProvider>{children}</AuthProvider>
    </BrowserRouter>
  );
};

function customRender(ui, options) {
  return render(ui, { wrapper: allTheProviders, ...options });
}

function renderWithRouter(component) {
  render(component, { wrapper: BrowserRouter });
}

function rendererWithRouter(component) {
  return renderer.create(<BrowserRouter>{component}</BrowserRouter>);
}

export {
  renderer,
  vi,
  render,
  screen,
  expect,
  test,
  describe,
  toJson,
  renderWithRouter,
  rendererWithRouter,
  customRender,
  allTheProviders as customWrapper,
};
