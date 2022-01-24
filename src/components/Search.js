import React, { useState } from "react";

const Search = ({ setQuery }) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
    setQuery(input);
  };
  return (
    <div className="search">
      <form>
        <input
          type="text"
          value={input}
          placeholder="Enter your character"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
