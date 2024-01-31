import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
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
                <View style={styles.emptyView}>
                    <Text style={styles.emptyText}>No products in the basket</Text>
                </View>
            }
        />
    );
};

const styles = StyleSheet.create({
    emptyView: {
        alignItems: 'center'
    },
    emptyText: {
        color: '#333333'
    }
});

export default BasketScreen;
