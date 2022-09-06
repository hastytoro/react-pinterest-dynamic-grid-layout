import React from "react";

import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    term: "...",
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitProp(this.state);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            {/* <label>Image search</label> */}
            <button type="submit" className="search-btn">
              <i className="fas fa-search"></i>
            </button>
            <input
              maxLength="15"
              minLength="3"
              className="field-input"
              type="text"
              placeholder="Search..."
              autoComplete="on"
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
        <h2>
          <a href="./index.html" id="logo">
            Pinterest+
          </a>
        </h2>
      </div>
    );
  }
}

export default SearchBar;
