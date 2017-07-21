import React, { Component } from 'react';

class OrgRow extends React.Component {
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

class OrgTable extends React.Component {
  render () {
    const rows = [];
    this.props.orgs.forEach(function(org) {
      rows.push(<OrgRow org={org} key={org.name}/> );
    });
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

class SearchBar extends React.Component {
  render () {
    return (
      <form>
        <input type="text" placeholder="Something Cool"/>
      </form>
    );
  }
}

class TableInfoText extends React.Component {
  render () {
    return (
      <h2>Look at all these organizations!</h2>
    );
  }
}

class WholeApp extends React.Component {
  render () {
    return (
      <div>
        <TableInfoText />
        <SearchBar />
        <OrgTable orgs={this.props.orgs} />
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
