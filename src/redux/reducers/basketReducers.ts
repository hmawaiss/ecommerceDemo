import { BasketItem } from '../../models/BasketItem';

export const basketReducer = (state: BasketItem[] = [], action: any) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            if (state.some((item) => item.product.id === action.payload.id)) {
                return state.map((item) =>
                    item.product.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...state, { product: action.payload, quantity: 1 }];
        case 'REMOVE_FROM_BASKET':
            return state.filter((item) => item.product.id !== action.payload);
        case 'UPDATE_ITEM_QUANTITY':
            return state.map((item) =>
                item.product.id === action.payload.productId
                    ? { ...item, quantity: Math.max(1, action.payload.quantity) }
                    : item
            );
        default:
            return state;
    }
};