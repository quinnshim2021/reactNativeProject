import React from 'react';
import renderer from 'react-test-renderer';

import { Camera } from './Camera';

test('renders correctly', () => {
  const camera = renderer.create(<Camera />).toJSON();
  expect(camera).toMatchSnapshot();
});