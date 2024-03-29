import React from "react";
import PropTypes from "prop-types";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { search: "" };
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { handleSearch } = this.props;
    const { search } = this.state;

    return (
      //This is the input search design with features
      <div className="search-container">
        <input
          placeholder="Search by name..."
          value={search}
          onChange={this.handleChange}
          className="search-input"
          type="text"
        />

        <button className="search-btn" onClick={() => handleSearch(search)}>
          Search
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default Search;
