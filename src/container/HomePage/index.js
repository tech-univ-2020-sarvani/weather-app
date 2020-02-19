import React from 'react';
import PropTypes from 'prop-types';
import details from '../../constants/weatherapp.json';
import useInput from '../../hooks/useInput';
import utils from '../../utils/useQuery';
// import weatherData from '../../constants/weatherData.json';

const HomePage = (props) => {
  const { testId } = props;
  const query = utils.useQuery();
  console.log(query);
  const latitude = query.get('lat');
  const longitude = query.get('lon');
  const cityname = query.get('cityname');
  let url = '';
  if (cityname) {
    url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${details.key}`;
  } else {
    url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${details.key}`;
  }

  const [params, setParams, listLoadComplete] = useInput({}, url);
  if (listLoadComplete === null) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <div className="homepage" data-testId={testId}>
      <div className="card">
        <h3>
          Location:
          {' '}
          {params.name}
        </h3>
        <h3>
          latitude:
          {' '}
          {params.coord.lat}
        </h3>
        <h3>
          longitude:
          {params.coord.lon}
        </h3>
        <h3>
          weather:
          {params.weather[0].description}
        </h3>
        <h3>
          Min-temparature:
          {params.main.temp_min}
        </h3>
        <h3>
          Max-temparature:
          {params.main.temp_max}
        </h3>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  testId: PropTypes.string,
};

export default HomePage;
