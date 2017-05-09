import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Car } from '../src/Car';
import Engine from '../src/Engine';

describe('<Car />', function () {
  describe('renders', function () {
    let wrapper;
    before(function () {
      wrapper = shallow(<Car color='red' />);
    });
    // check dynamic data renders correctly
    // find elements by ID
    it('renders the heading', function () {
      const heading = wrapper.find('#car--heading');
      expect(heading).to.have.lengthOf(1);
      expect(heading.text()).to.equal('I am a red car');
    });
    // check child components are called correctly
    it('has a diesel engine', function () {
      // testing hint: If the child component is a composed component
      // then you will likely need to find by class otherwise
      // finding by string (e.g. 'Engine') will work
      const engine = wrapper.find(Engine);
      expect(engine.prop('type')).to.equal('diesel');
    });
  });
});
