import 'react-native';
import React from 'react';

import { it } from '@jest/globals';

import renderer from 'react-test-renderer';
import ProductListScreen from '../src/screens/ProductListScreen';

it('renders correctly ProductList Screen', () => {
    renderer.create(<ProductListScreen />);
});