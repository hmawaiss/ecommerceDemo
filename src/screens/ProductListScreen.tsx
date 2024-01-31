import React, { useEffect, useState } from 'react';
import { View, Alert, FlatList, Text } from 'react-native';
import { fetchProducts } from '../services/productService';
import { Product } from '../models/Product';
import ProductCell from '../components/productCell';

const ProductListScreen = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProductsData = async () => {
        try {
            const products = await fetchProducts();
            setProducts(products);
        } catch (error) {
            console.error('Error:', error);
            Alert.alert("Error", (error as Error).message || 'Failed to fetched products');
        }
    };

    useEffect(() => {
        fetchProductsData();
    }, []);

    return (
        <View>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ProductCell product={item} />}
                ListEmptyComponent={
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: '#333333' }}>No product found</Text>
                    </View>
                }
            />
        </View>
    );
};

export default ProductListScreen;
