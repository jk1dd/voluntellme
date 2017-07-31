import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import axios from 'axios'
const google = window.google;

class Map extends Component {

  constructor(){
    super()
    this.state = {
      map: null,
      organizations: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/organizations').then((result) => {
      this.setState({ organizations: result.data });
    });
  }

  handleMarkerClick = this.handleMarkerClick.bind(this)
  handleMarkerClose = this.handleMarkerClose.bind(this)

  handleMarkerClick(targetOrg) {
    this.setState({
      organizations: this.state.organizations.map(org => {
        if (org === targetOrg) {
          return {
            ...org,
            showInfo: true,
          }
        }
        return org
      })
    })
  }

  handleMarkerClose(targetOrg) {
    this.setState({
      organizations: this.state.organizations.map(org => {
        if (org === targetOrg) {
          return {
            ...org,
            showInfo: false,
          }
        }
        return org
      })
    })
  }

  render () {

    return (
      <GoogleMap
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center} >
        {this.state.organizations.map(org => (
          <Marker
            position={new google.maps.LatLng(org.loc.replace(/[()]/g, '').split(',')[0], org.loc.replace(/[()]/g, '').split(',')[1].substring(1))}
            key={org.id}
            showInfo={false}
            onClick={() => this.handleMarkerClick(org)}
             >

             {org.showInfo && (
              <InfoWindow onCloseClick={() => this.handleMarkerClose(org)}>
                <a href={`https://www.google.com/search?site=&source=hp&q=${org.name}`} target="_blank">{org.name}</a>

              </InfoWindow>
            )}

          </Marker>
          )
        )}
      </GoogleMap>
    )
  }
}

export default withGoogleMap(Map);
