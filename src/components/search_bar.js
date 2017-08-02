import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    // input here is a controlled component, whose value is set by state, i.e.
    // its value changes only when its state changes
    return (
        // u can render the value of the input field e.g.
        // inserting into the div: Value of the input: {this.state.term}
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;