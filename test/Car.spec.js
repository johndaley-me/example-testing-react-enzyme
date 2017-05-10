import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Car } from '../src/Car';
import Engine from '../src/Engine';

chai.should();
chai.use(sinonChai);

describe('<Car />', function () {
  let wrapper;
  let handleStartCar;
  before(function () {
    handleStartCar = sinon.spy();
    wrapper = shallow(<Car color='red' handleStartCar={handleStartCar} />);
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
  // check actions
  it('calls hanldeStartCar on button click', function () {
    const button = wrapper.find('#car--start');
    expect(button).to.have.lengthOf(1);
    button.simulate('click');
    handleStartCar.should.have.been.calledOnce;
  });
});
