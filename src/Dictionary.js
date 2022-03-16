import React from "react";

export default function Dictionary() {
  return (
    <form>
      <div className="row">
        <div className="col-6">
          <input type="search" placeholder="Search" className="form-control" />
        </div>

        <div className="col-3">
          <input type="submit" value="search" className="btn btn-primary" />
        </div>
      </div>
    </form>
  );
}
