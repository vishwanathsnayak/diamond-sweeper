import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './app';
import Board from './board';

const container = shallow(<App />);

describe('<App> component', () => {

  it('Should render component', () => {
    expect(container.find(App)).to.exist;
  });

  it('Should render <Board> component', () => {
    expect(container.find(App).find(Board)).to.exist;
  });

  it('Should render exactly one <Board> component', () => {
    expect(container.find(Board).length).to.equal(1);
  });

});
