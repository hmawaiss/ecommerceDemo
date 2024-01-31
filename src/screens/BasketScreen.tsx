import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import BasketCell from '../components/BasketCell';

const BasketScreen = () => {
    const basket = useSelector((state: RootState) => state.basket);

    return (
        <FlatList
            data={basket}
            keyExtractor={(item) => item.product.id.toString()}
            renderItem={({ item }) => <BasketCell item={item} />}
            ListEmptyComponent={
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: '#333333' }}>No products in the basket</Text>
                </View>
            }
        />
    );
};

export default BasketScreen;
