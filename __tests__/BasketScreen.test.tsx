import 'react-native';
import React from 'react';

import { it } from '@jest/globals';

import renderer from 'react-test-renderer';
import BasketScreen from '../src/screens/BasketScreen';

it('renders correctly Basket Screen', () => {
    renderer.create(<BasketScreen />);
});