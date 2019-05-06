import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

configure({ adapter: new Adapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

// SuccessMessage
test('Component render withot errors', () => {
  const wrapper = setup();
  const headerComponent = findByTestAttr(wrapper, 'AppComponent');
  expect(headerComponent.length).toBe(1);
});
