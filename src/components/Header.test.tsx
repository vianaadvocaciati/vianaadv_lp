import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "./Header";

describe("Header", () => {
  it("does not advertise the client portal in the public landing page", () => {
    render(<Header />);

    expect(screen.queryByRole("link", { name: "Área do Cliente" })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Menu" }));

    expect(screen.queryByRole("link", { name: "Área do Cliente" })).not.toBeInTheDocument();
  });
});
