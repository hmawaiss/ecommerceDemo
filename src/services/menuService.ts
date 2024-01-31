import { MenuItem } from '../models/MenuItem';
import { getApiCall } from './apiUtility';

export const fetchMenu = async (): Promise<MenuItem> => {
    try {
        const response = await getApiCall<MenuItem>('/menu');
        return response;
    } catch (error) {
        throw new Error('Failed to fetch products.');
    }
};