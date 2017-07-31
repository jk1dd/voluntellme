import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

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
      map: null
    }
  }

  mapMoved () {
    console.log('Map moved')
  }

  mapLoaded(map) {
    // console.log('mapLoaded:' + JSON.stringify(map.getCenter()))
    if (this.state != null)
    return this.setState({
      map: map
    })
  }
  render () {
    const markers = this.props.markers || []

    return (
      <GoogleMap
        ref={this.mapLoaded.bind(this)}
        onDragEnd={this.mapMoved.bind(this)}
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center} >
        {markers.map((marker, index) => (
          <Marker {...marker} />
        )
      )}
      </GoogleMap>
    )
  }
}

export default withGoogleMap(Map);
