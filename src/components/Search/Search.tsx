import { useState } from "react";
import type { ChangeEvent } from "react";

import "./styles.css";

type InputEvent = ChangeEvent<HTMLInputElement>;

const Search = () => {
  const [value, setValue] = useState("");

  const handleSearchInputChange = (event: InputEvent): void => {
    setValue(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        className="search-container__input"
        placeholder={`Search ("/" for hotkey)`}
        type="text"
        value={value}
        onChange={handleSearchInputChange}
      />
      <i className="search-container__icon" />
    </div>
  );
};

export default Search;
