import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <React.Fragment>
        <form className="form-inline my-2 my-lg-0" onSubmit={this.onFormSubmit}>
          <input
            className="form-control mr-sm-2"
            placeholder="Search"
            aria-label="Search"
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchBar;
