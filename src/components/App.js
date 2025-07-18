import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  function handleDarkModeClick() {
    setIsDarkMode((prev) => !prev);
  }

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  function handleSearchChange(newSearch) {
    setSearch(newSearch);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList
        items={items}
        onItemFormSubmit={handleItemFormSubmit}
        search={search}
        onSearchChange={handleSearchChange}
      />
    </div>
  );
}

export default App;
