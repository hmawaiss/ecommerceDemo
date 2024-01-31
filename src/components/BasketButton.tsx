import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';

const BasketButton = ({ onPress }: { onPress: () => void }) => {
    const basket = useSelector((state: RootState) => state.basket);

    const basketItemCount = basket.length;

    return (
        <TouchableOpacity onPress={onPress} style={styles.basketButton}>
            <Text>Basket ({basketItemCount})</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    basketButton: {
        marginRight: 10
    }
});

export default BasketButton;
