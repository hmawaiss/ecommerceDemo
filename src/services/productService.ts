import { Product } from '../models/Product';
import { getApiCall } from './apiUtility';

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await getApiCall<Product[]>('/products');
        return response;
    } catch (error) {
        throw new Error('Failed to fetch products.');
    }
};