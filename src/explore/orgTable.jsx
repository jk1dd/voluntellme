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
      if ((org.name + org.city + org.county + org.state + org.zip).toLowerCase().indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(<OrgRow org={org} key={org.id}/> );
    });

    return(
      <table id="org-table">
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

export default OrgTable;
