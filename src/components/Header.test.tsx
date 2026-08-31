import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "./Header";

describe("Header", () => {
  it("offers the client portal in the desktop header and mobile menu", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: "Área do Cliente" })).toHaveAttribute(
      "href",
      "https://cliente.wallyssonviana.com.br",
    );

    fireEvent.click(screen.getByRole("button", { name: "Menu" }));

    expect(screen.getAllByRole("link", { name: "Área do Cliente" })).toHaveLength(2);
  });
});
