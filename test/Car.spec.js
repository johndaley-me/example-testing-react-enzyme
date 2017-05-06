import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Car } from '../src/Car';

describe('<Car />', function () {
  describe('renders data', function () {
    let wrapper;
    before(function () {
      wrapper = shallow(<Car color='red' />);
    });
    it('renders the heading', function () {
      const heading = wrapper.find('#car--heading');
      expect(heading).to.have.lengthOf(1);
      expect(heading.text()).to.equal('I am a red car');
    });
  });
});
