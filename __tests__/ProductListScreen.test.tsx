import 'react-native';
import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react-native';
import ProductListScreen from '../src/screens/ProductListScreen';
import ProductCell from '../src/components/ProductCell';
import { Product } from '../src/models/Product';
import { addToBasket } from '../src/redux/actions/basketActions';

describe('Product List Screen', () => {
    it('renders empty message when no products are fetched', async () => {
        render(<ProductListScreen />);
        const emptyText = await screen.findByText('No product found');
        expect(emptyText).toBeTruthy();
    });

    it('renders product details correctly', () => {
        const mockProduct: Product = {
            id: 1,
            name: 'Product 1',
            img: 'https://example.com/image1.jpg',
            price: 10,
            colour: 'Red',
        };

        render(<ProductCell product={mockProduct} />);

        const productName = screen.getByText('Product 1');
        const productPrice = screen.getByText('$10');
        const productColour = screen.getByText('Red');
        const addToBasketButton = screen.getByText('Add to Basket');

        expect(productName).toBeVisible();
        expect(productPrice).toBeVisible();
        expect(productColour).toBeVisible();
        expect(addToBasketButton).toBeVisible();
    });

    it('dispatches addToBasket action when Add to Basket button is pressed', () => {
        const mockProduct: Product = {
            id: 1,
            name: 'Product 1',
            img: 'https://example.com/image1.jpg',
            price: 10,
            colour: 'Red',
        };
        render(<ProductCell product={mockProduct} />);

        const addToBasketButton = screen.getByText('Add to Basket');
        fireEvent.press(addToBasketButton);

        expect(addToBasket).toHaveBeenCalledWith(mockProduct);
    });

});
