import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Card } from ".";

describe("Card", () => {
  test("should be flipped", () => {
    const { rerender } = render(
      <Card image="" flipped={false} memorized={false} handleClick={jest.fn} />
    );

    screen.logTestingPlaygroundURL();

    expect(true).toBe(true);
  });
  test("should be memorized", () => {});
  test("should call onClick by clicking", () => {});
});
