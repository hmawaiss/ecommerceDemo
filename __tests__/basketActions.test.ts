import { BasketItem } from "../src/models/BasketItem";
import { addToBasket, removeFromBasket, updateItemQuantity } from "../src/redux/actions/basketActions";
import { basketReducer } from "../src/redux/reducers/basketReducers";


describe('Basket Actions', () => {
    const product = {
        id: 1,
        colour: 'Red',
        name: 'Test Product',
        price: 20,
        img: 'https://example.com/image.jpg',
    };

    it('should create an action to add a product in the basket', () => {
        const expectedAction = {
            type: 'ADD_TO_BASKET',
            payload: product,
        };
        expect(addToBasket(product)).toEqual(expectedAction);
    });

    it('should create an action to update the quantity of a product in the basket', () => {
        const productId = 1;
        const quantity = 2;
        const expectedAction = {
            type: 'UPDATE_ITEM_QUANTITY',
            payload: { productId, quantity },
        };
        expect(updateItemQuantity(productId, quantity)).toEqual(expectedAction);
    });


    it('should create an action to remove a product from the basket', () => {
        const productId = 1;
        const expectedAction = {
            type: 'REMOVE_FROM_BASKET',
            payload: productId,
        };
        expect(removeFromBasket(productId)).toEqual(expectedAction);
    });
});

describe('Basket Reducer', () => {
    const initialState: BasketItem[] = [];
    const testProduct: BasketItem = {
        product: {
            id: 1,
            colour: 'Red',
            name: 'Test Product',
            price: 30,
            img: 'https://example.com/image.jpg',
        },
        quantity: 2,
    };

    it('should handle ADD_TO_BASKET', () => {
        const action = addToBasket(testProduct.product);
        expect(basketReducer(initialState, action)).toHaveLength(1);
    });

    it('should handle UPDATE_ITEM_QUANTITY', () => {
        const addAction = addToBasket(testProduct.product);
        const updateAction = updateItemQuantity(testProduct.product.id, 3);
        const stateAfterAdd = basketReducer(initialState, addAction);
        expect(basketReducer(stateAfterAdd, updateAction)).toEqual([{ ...testProduct, quantity: 3 }]);
    });

    it('should handle REMOVE_FROM_BASKET', () => {
        const addAction = addToBasket(testProduct.product);
        const removeAction = removeFromBasket(testProduct.product.id);
        const stateAfterAdd = basketReducer(initialState, addAction);
        expect(basketReducer(stateAfterAdd, removeAction)).toEqual([]);
    });
});
