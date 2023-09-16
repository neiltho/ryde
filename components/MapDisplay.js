// components/MapDisplay.js
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapDisplay = withScriptjs(withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: props.latitude, lng: props.longitude }}
  >
    <Marker position={{ lat: props.latitude, lng: props.longitude }} />
  </GoogleMap>
)));

export default MapDisplay;
