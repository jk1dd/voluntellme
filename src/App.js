import React, { Component } from 'react';

class OrgRow extends Component {
  render () {
    return (
      <tr>
        <td>{this.props.org.name}</td>
        <td>{this.props.org.city}</td>
        <td>{this.props.org.county}</td>
        <td>{this.props.org.state}</td>
        <td>{this.props.org.zip}</td>
      </tr>
    );
  }
}

class OrgTable extends Component {
  render () {
    const rows = [];

    this.props.orgs.forEach((org) => {
      if (org.name.indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(<OrgRow org={org} key={org.name}/> );
    });
    // this.props.orgs.forEach(function(org) {
    //   rows.push(<OrgRow org={org} key={org.name}/> );
    // });

    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>County</th>
            <th>State</th>
            <th>ZIP</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }
  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }
  render () {
    return (
      <form>
      <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.handleFilterTextInputChange}/>
      </form>
    );
  }
}

class TableInfoText extends Component {
  render () {
    return (
      <h2>Look at all these organizations!</h2>
    );
  }
}

class WholeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  render () {
    return (
      <div>
        <TableInfoText />
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
        />
        <OrgTable
          orgs={this.props.orgs}
          filterText={this.state.filterText}/>
      </div>
    );
  }
}

export const organizations = [
  {name: 'Test Org', city: 'CSprings', county: 'Cheyenne', state: 'CO', zip: '80906'},
  {name: 'Phone', city: 'Raleigh', county: 'Wade', state: 'NC', zip: '27681'}
]

// ReactDOM.render(
//   <WholeApp orgs={ORGANZIATIONS} />,
//   document.getElementById('root')
// );

export default WholeApp;
