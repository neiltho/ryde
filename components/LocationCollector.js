import React from 'react';

class LocationCollector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this.setState({ latitude, longitude });
        },
        (error) => {
          this.setState({ error: error.message });
        }
      );
    } else {
      this.setState({ error: "Geolocation is not supported by your browser." });
    }
  }

  render() {
    const { latitude, longitude, error } = this.state;

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (latitude !== null && longitude !== null) {
        
      return (
        <div>
          Latitude: {latitude}, Longitude: {longitude}
        </div>
      );
    }

    return <div>Getting the location data...</div>;
  }
}

export default LocationCollector;
