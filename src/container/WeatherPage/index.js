import React from 'react';
import { geolocated } from 'react-geolocated';
import { Redirect } from 'react-router-dom';
import Button from '../../components/Button';

const WeatherPage = ({ isGeolocationAvailable, isGeolocationEnabled, coords }) => {
  if (!isGeolocationAvailable) {
    return (<div>Your browser does not support Geolocation</div>);
  }
  if (!isGeolocationEnabled) {
    return (
      <div>
        Geolocation is not enabled
        <Redirect to="/bycityname" />
      </div>

    );
  }
  if (coords) {
    console.log(coords.latitude, coords.longitude);
    const path = `/weather?lat=${coords.latitude}&lon=${coords.longitude}`;
    return (
      <div>
        <Button path={path}>Predict Weather</Button>
      </div>
    );
  }
  return (
    <div>Getting the location data&hellip; </div>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(WeatherPage);
