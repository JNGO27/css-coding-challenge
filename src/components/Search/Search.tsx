import { useState, useRef, useEffect } from "react";
import type { ChangeEvent } from "react";

import "./styles.css";

type InputEvent = ChangeEvent<HTMLInputElement>;

const Search = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleKeyDownFocus = (event: KeyboardEvent): void => {
      if (event.key === "/" && inputRef.current !== null) {
        event.preventDefault();
        inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDownFocus);

    return () => {
      window.removeEventListener("keydown", handleKeyDownFocus);
    };
  }, []);

  const handleSearchInputChange = (event: InputEvent): void => {
    setValue(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        className="search-container__input"
        placeholder={`Search ("/" for hotkey)`}
        type="text"
        ref={inputRef}
        value={value}
        onChange={handleSearchInputChange}
      />
      <i className="search-container__icon" />
    </div>
  );
};

export default Search;
