import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HelloComponent from './HelloComponent';

describe('<HelloComponent />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper =
      shallow(<HelloComponent />);
  });

  it('has a hello text ', () => {
    expect(wrapper.find('p').text()).to.eql('Hello World');
  });
});
