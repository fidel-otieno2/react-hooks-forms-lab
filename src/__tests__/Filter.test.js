import { render, screen } from "@testing-library/react";
import Filter from "../components/Filter";

test("input field acts as a controlled input", () => {
  render(
    <Filter
      search="testing 123"
      onSearchChange={() => {}}
      onCategoryChange={() => {}}
    />
  );

  expect(screen.getByPlaceholderText(/Search/i).value).toBe("testing 123");
});
