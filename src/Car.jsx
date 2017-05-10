import React from 'react';
import PropTypes from 'prop-types';
import Engine from './Engine';

// testing hint: export the named render function for unit testing
// as the default exported component at the end may be a Higher Order Component
// with external dependencies not relevant to the unit test
export const Car = ({ color, handleStartCar }) => (
  <div>
    {/* Find and test dynamic data by id */}
    <h1 id='car--heading'>I am a {color} car</h1>
    <Engine type='diesel' />
    <button id='car--start' type='button' onClick={handleStartCar}>Start</button>
  </div>
);
Car.propTypes = {
  color: PropTypes.string.isRequired,
  handleStartCar: PropTypes.func.isRequired,
};
export default Car;
