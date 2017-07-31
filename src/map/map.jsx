import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import axios from 'axios'
const google = window.google;

// const Map = () => (
//   <div className='map-things'>
//     <div className='tab-header' id='map-block'>
//       <h1>Mapped</h1>
//       <p>Look at organizations on the map!</p>
//     </div>
//     <div className='off-the-wall'>
//
//     </div>
//   </div>
// )

class Map extends Component {

  constructor(){
    super()
    this.state = {
      map: null,
      organizations: []
    }
  }

  // componentDidMount() {
  //   axios.get('http://localhost:3000/api/v1/organizations').then((result) => {
  //     this.setState({ markers: result.data.map(org => {
  //       return {lat: org.loc.replace(/[()]/g, '').split(',')[0], lng: org.loc.replace(/[()]/g, '').split(',')[1]}
  //       })
  //     });
  //   })
  // }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/organizations').then((result) => {
      this.setState({ organizations: result.data });
    });
  }

  // mapMoved () {
  //   console.log('Map moved')
  // }
  //
  // mapLoaded(map) {
  //   // console.log('mapLoaded:' + JSON.stringify(map.getCenter()))
  //   // debugger
  //   if (this.state != null)
  //   return this.setState({
  //     map: map
  //   })
  // }

  render () {

    return (
      <GoogleMap
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center} >
        {this.state.organizations.map(org => (
          <Marker
            position={new google.maps.LatLng(org.loc.replace(/[()]/g, '').split(',')[0], org.loc.replace(/[()]/g, '').split(',')[1].substring(1))}
            key={org.id} />
        )
      )}
      </GoogleMap>
    )
  }
}

export default withGoogleMap(Map);
