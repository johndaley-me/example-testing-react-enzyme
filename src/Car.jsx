import React from 'react';
import PropTypes from 'prop-types';

// testing hint: export the named render function for unit testing
// as the default exported component at the end may be a Higher Order Component
// with external dependencies not relevant to the unit test
export const Car = ({ color }) => (
  <div>
    {/* Find and test dynamic data by id */}
    <h1 id='car--heading'>I am a {color} car</h1>
  </div>
);
Car.propTypes = {
  color: PropTypes.string.isRequired,
};
export default Car;
