import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(" ");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition...`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <div className="row">
          <div className="col-3">
            <input
              type="search"
              placeholder="Search"
              className="form-control"
              onChange={handleKeywordChange}
            />
          </div>

          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
}
