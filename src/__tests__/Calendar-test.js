import Calendar from "../Calendar";
import { render, screen } from "@testing-library/react";

describe("Calendar", () => {
  it("should render calendar table", () => {
    const dateString = "03/10/22";
    render(<Calendar dateString={dateString} />);
    const table = screen.getByRole("table");
    expect(table).toBeTruthy();
  });
  it("should render calendar row", () => {
    const dateString = "03/10/22";
    render(<Calendar dateString={dateString} />);
    const trElements = screen.getAllByRole("row");
    expect(trElements).toHaveLength(7);
  });
  it("should render calendar cells including those dates not in the month", () => {
    const dateString = "03/10/22";
    render(<Calendar dateString={dateString} />);
    const tdElements = screen.getAllByRole("cell");
    expect(tdElements).toHaveLength(33);
  });
  it("should render selected date with different className", () => {
    const dateString = "03/10/22";
    render(<Calendar dateString={dateString} />);
    const tdElements = screen.getAllByRole("cell");
    expect(tdElements[11].classList.contains("today")).toBe(true);
  });
});
