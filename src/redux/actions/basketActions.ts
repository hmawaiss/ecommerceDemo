import { Product } from "../../models/Product";

export const addToBasket = (product: Product) => ({
    type: 'ADD_TO_BASKET',
    payload: product,
});

export const removeFromBasket = (productId: number) => ({
    type: 'REMOVE_FROM_BASKET',
    payload: productId,
});

export const updateItemQuantity = (productId: number, quantity: number) => ({
    type: 'UPDATE_ITEM_QUANTITY',
    payload: { productId, quantity },
});