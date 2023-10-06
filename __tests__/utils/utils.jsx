import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

function toJson(component) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result;
}

function renderWithRouter(component) {
  render(component, { wrapper: BrowserRouter });
}

function rendererWithRouter(component) {
  return renderer.create(<BrowserRouter>{component}</BrowserRouter>);
}

export {
  renderer,
  render,
  screen,
  expect,
  test,
  describe,
  toJson,
  renderWithRouter,
  rendererWithRouter,
};
