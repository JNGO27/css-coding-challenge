import { useState } from "react";
import type { ChangeEvent } from "react";

type InputEvent = ChangeEvent<HTMLInputElement>;

const Search = () => {
  const [value, setValue] = useState("");

  const handleSearchValue = (event: InputEvent): void => {
    setValue(event.target.value);
  };

  return (
    <input
      className="search"
      placeholder={`Search ("/" for hotkey)`}
      value={value}
      onChange={handleSearchValue}
    />
  );
};

export default Search;
