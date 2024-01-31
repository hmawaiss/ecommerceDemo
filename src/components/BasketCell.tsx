import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeFromBasket, updateItemQuantity } from '../redux/actions/basketActions';
import { BasketItem } from '../models/BasketItem';

const BasketCell = ({ item }: { item: BasketItem }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeFromBasket(item.product.id));
    };

    const handleQuantityChange = (newQuantity: number) => {
        dispatch(updateItemQuantity(item.product.id, newQuantity));
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: item.product.img }} style={styles.image} resizeMode='contain' />
            <View style={{ flex: 1 }}>
                <Text>{item.product.name}</Text>
                <Text>${item.product.price}</Text>
                <Text>Quantity: {item.quantity}</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={[styles.button, styles.removeButton]} onPress={handleRemove}>
                        <Text style={styles.buttonText}>Remove</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.plusButton]} onPress={() => handleQuantityChange(item.quantity + 1)}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.minusButton]} onPress={() => handleQuantityChange(item.quantity - 1)}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
        justifyContent: 'space-between',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 5,
        marginRight: 16,
    },
    button: {
        borderRadius: 5,
        overflow: 'hidden',
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    removeButton: {
        backgroundColor: '#ff2222',
    },
    plusButton: {
        backgroundColor: '#22ff22',
    },
    minusButton: {
        backgroundColor: '#2222ff',
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
});

export default BasketCell;
