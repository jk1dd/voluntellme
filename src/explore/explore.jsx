import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './searchBar.jsx'
import OrgTable from './orgTable.jsx'

class Explore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      organizations: []
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/organizations').then((result) => {
      this.setState({ organizations: result.data });
    });
  }

  render () {
    return (
      <div>
        <h1>Look at all these organizations!</h1>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
        />
        <OrgTable
          orgs={this.state.organizations}
          filterText={this.state.filterText}/>
      </div>
    );
  }
}

export default Explore;
