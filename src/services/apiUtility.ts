import axios, { AxiosResponse, AxiosError } from 'axios';

const BASE_URL = 'https://my-json-server.typicode.com/benirvingplt/products';

interface ApiError {
    status?: number;
    message: string;
}

const getApiCall = async <T>(url: string): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await axios.get(`${BASE_URL}/${url}`);
        return response.data;
    } catch (error) {
        handleError(error);
        throw new Error('Failed to fetch data.');
    }
};

const handleError = (error: any): void => {
    if (axios.isAxiosError(error)) {
        handleAxiosError(error);
    } else {
        console.error('Network Error:', error.message);
    }
};

const handleAxiosError = (error: AxiosError<ApiError>): void => {
    const status = error.response?.status;

    switch (status) {
        case 401:
            console.error('Unauthorized Access');
            break;

        case 404:
            console.error('Resource Not Found');
            break;

        case 500:
            console.error('Internal Server Error');
            break;

        default:
            console.error('Unexpected Error:', error.message);
            break;
    }
};

export { getApiCall };
