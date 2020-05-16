import React from 'react';
import renderer from 'react-test-renderer';

import { Camera } from './Camera';
import {shallow} from 'enzyme';

test('renders correctly', () => {
  const camera = renderer.create(<Camera />).toJSON();
  expect(camera).toMatchSnapshot();
});

test("flip camera", () => {
  const wrapper = shallow(<Camera />);
  const firstButton = wrapper.find("TouchableOpacity").at(2);
  
  firstButton.simulate("click");
  expect(wrapper.props.type).toEqual(Camera.Constants.Type.back);
});