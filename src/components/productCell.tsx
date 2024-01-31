import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Product } from '../models/Product';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/actions/basketActions';

const ProductCell = ({ product }: { product: Product }) => {

    const dispatch = useDispatch();

    const handleAddToBasket = () => {
        dispatch(addToBasket(product));
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: product.img }} style={styles.image} resizeMode='contain' />
            <View style={styles.detailContainer}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>${product.price}</Text>
                <Text style={styles.color}>{product.colour}</Text>
                <View>
                    <TouchableOpacity onPress={handleAddToBasket} style={styles.addButton}>
                        <Text style={styles.addButtonText}>Add to Basket</Text>
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
    detailContainer: {
        flex: 1
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 5,
        marginRight: 16,
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
    },
    price: {
        fontSize: 14,
        color: '#333333',
        fontWeight: '500',
        marginBottom: 8,
    },
    color: {
        fontSize: 14,
        color: '#888',
    },
    addButton: {
        backgroundColor: '#5555ff',
        padding: 8,
        borderRadius: 5,
        alignSelf: 'flex-end',
    },
    addButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
});

export default ProductCell;
